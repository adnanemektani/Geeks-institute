// -- Exercise 1 -- //

SELECT rating, COUNT(*) 
FROM film
GROUP BY rating;

SELECT title, rating
FROM film
WHERE rating IN ('G','PG-13');

SELECT title, rating, length, rental_rate
FROM film
WHERE rating IN ('G','PG-13')
AND length < 120
AND rental_rate < 3.00
ORDER BY title ASC;

UPDATE customer
SET first_name = 'Walid',
    last_name = 'Habibi',
    email = 'walid@example.com'
WHERE customer_id = 1;

UPDATE address
SET address = '123 My Street',
    district = 'Casablanca',
    postal_code = '20000',
    phone = '0600000000'
WHERE address_id = (
    SELECT address_id
    FROM customer
    WHERE customer_id = 1
);


// -- Exercise 2 -- //

UPDATE students
SET birth_date = '1998-11-02'
WHERE (first_name = 'Lea' AND last_name = 'Benichou')
   OR (first_name = 'Marc' AND last_name = 'Benichou');

UPDATE students
SET last_name = 'Guez'
WHERE first_name = 'David' AND last_name = 'Grez';

DELETE FROM students
WHERE first_name = 'Lea' AND last_name = 'Benichou';

SELECT COUNT(*) 
FROM students;

SELECT COUNT(*) 
FROM students
WHERE birth_date > '2000-01-01';

ALTER TABLE students
ADD COLUMN math_grade INTEGER;

UPDATE students
SET math_grade = 80
WHERE id = 1;

UPDATE students
SET math_grade = 90
WHERE id IN (2,4);

UPDATE students
SET math_grade = 40
WHERE id = 6;

SELECT COUNT(*) 
FROM students
WHERE math_grade > 83;

INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Omer','Simpson','1980-10-03',70);

SELECT first_name, last_name, COUNT(math_grade) AS total_grade
FROM students
GROUP BY first_name, last_name;

SELECT SUM(math_grade)
FROM students;

// -- Exercise 3 -- //

CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    item_id INT REFERENCES items(id),
    quantity_purchased INT
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name='Scott' AND last_name='Scott'),
    (SELECT id FROM items WHERE name='Fan'),
    1
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name='Melanie' AND last_name='Johnson'),
    (SELECT id FROM items WHERE name='Large Desk'),
    10
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name='Greg' AND last_name='Jones'),
    (SELECT id FROM items WHERE name='Small Desk'),
    2
);

SELECT * 
FROM purchases;

SELECT *
FROM purchases p
JOIN customers c
ON p.customer_id = c.id;

SELECT *
FROM purchases
WHERE customer_id = 5;

SELECT *
FROM purchases p
JOIN items i
ON p.item_id = i.id
WHERE i.name IN ('Large Desk','Small Desk');

SELECT c.first_name, c.last_name, i.name
FROM purchases p
JOIN customers c ON p.customer_id = c.id
JOIN items i ON p.item_id = i.id;

INSERT INTO purchases (customer_id, quantity_purchased)
VALUES (1, 1);