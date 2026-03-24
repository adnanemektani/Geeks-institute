-- Daily Challenge 1

-- Part I

DROP TABLE IF EXISTS customer_profile;
DROP TABLE IF EXISTS customer;

CREATE TABLE customer (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL
);

CREATE TABLE customer_profile (
  id SERIAL PRIMARY KEY,
  isLoggedIn BOOLEAN DEFAULT FALSE,
  customer_id INT UNIQUE REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO customer (first_name, last_name)
VALUES
  ('John', 'Doe'),
  ('Jerome', 'Lalu'),
  ('Lea', 'Rive');

INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES
  (
    TRUE,
    (SELECT id FROM customer WHERE first_name = 'John' AND last_name = 'Doe')
  ),
  (
    FALSE,
    (SELECT id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu')
  );

SELECT c.first_name
FROM customer c
JOIN customer_profile cp ON cp.customer_id = c.id
WHERE cp.isLoggedIn = TRUE;

SELECT c.first_name, cp.isLoggedIn
FROM customer c
LEFT JOIN customer_profile cp ON cp.customer_id = c.id
ORDER BY c.id;

SELECT COUNT(*) AS not_logged_in_count
FROM customer c
LEFT JOIN customer_profile cp ON cp.customer_id = c.id
WHERE COALESCE(cp.isLoggedIn, FALSE) = FALSE;


-- Part II

DROP TABLE IF EXISTS library;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS book;

CREATE TABLE book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL
);

INSERT INTO book (title, author)
VALUES
  ('Alice In Wonderland', 'Lewis Carroll'),
  ('Harry Potter', 'J.K Rowling'),
  ('To kill a mockingbird', 'Harper Lee');

CREATE TABLE student (
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  age INT CHECK (age <= 15)
);

INSERT INTO student (name, age)
VALUES
  ('John', 12),
  ('Lera', 11),
  ('Patrick', 10),
  ('Bob', 14);

CREATE TABLE library (
  book_fk_id INT REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
  student_fk_id INT REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
  borrowed_date DATE,
  PRIMARY KEY (book_fk_id, student_fk_id)
);

INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES
  (
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'John'),
    DATE '2022-02-15'
  ),
  (
    (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    DATE '2021-03-03'
  ),
  (
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'Lera'),
    DATE '2021-05-23'
  ),
  (
    (SELECT book_id FROM book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    DATE '2021-08-12'
  );

SELECT *
FROM library
ORDER BY borrowed_date;

SELECT s.name, b.title
FROM library l
JOIN student s ON s.student_id = l.student_fk_id
JOIN book b ON b.book_id = l.book_fk_id
ORDER BY s.name, b.title;

SELECT AVG(s.age) AS avg_age_for_alice_book
FROM library l
JOIN student s ON s.student_id = l.student_fk_id
JOIN book b ON b.book_id = l.book_fk_id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM student
WHERE name = 'Bob';

SELECT *
FROM library
ORDER BY borrowed_date;


-- Daily Challenge 2

DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS product_orders;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE product_orders (
  order_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  order_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE items (
  item_id SERIAL PRIMARY KEY,
  order_id INT NOT NULL REFERENCES product_orders(order_id) ON DELETE CASCADE ON UPDATE CASCADE,
  item_name VARCHAR(150) NOT NULL,
  quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0),
  price NUMERIC(10,2) NOT NULL CHECK (price >= 0)
);

CREATE OR REPLACE FUNCTION get_order_total(p_order_id INT)
RETURNS NUMERIC(10,2)
LANGUAGE sql
AS $$
  SELECT COALESCE(SUM(i.price * i.quantity), 0)::NUMERIC(10,2)
  FROM items i
  WHERE i.order_id = p_order_id;
$$;

CREATE OR REPLACE FUNCTION get_order_total_by_user(p_order_id INT, p_user_id INT)
RETURNS NUMERIC(10,2)
LANGUAGE sql
AS $$
  SELECT COALESCE(SUM(i.price * i.quantity), 0)::NUMERIC(10,2)
  FROM items i
  JOIN product_orders po ON po.order_id = i.order_id
  WHERE i.order_id = p_order_id
    AND po.user_id = p_user_id;
$$;

INSERT INTO users (username)
VALUES ('john_doe'), ('lea_rive');

INSERT INTO product_orders (user_id)
VALUES
  ((SELECT user_id FROM users WHERE username = 'john_doe')),
  ((SELECT user_id FROM users WHERE username = 'lea_rive'));

INSERT INTO items (order_id, item_name, quantity, price)
VALUES
  (1, 'Keyboard', 1, 50.00),
  (1, 'Mouse', 2, 20.00),
  (2, 'Headphones', 1, 80.00);

SELECT get_order_total(1);
SELECT get_order_total_by_user(1, 1);
