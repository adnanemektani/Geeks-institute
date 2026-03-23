CREATE TABLE items (
  id  SERIAL PRIMARY KEY,
  name VARCHAR(20),
  price INTEGER
);
CREATE TABLE cusmers (
  id  SERIAL PRIMARY KEY,
  firstname VARCHAR(20),
  lastname VARCHAR(20)
);
INSERT INTO  items (name, price) VALUES 
('Small Desk', 100) , 
('Large desk', 300), 
('Fan', 80);
INSERT INTO customers (firstname, lastname) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');
SELECT * FROM items;
SELECT * FROM items WHERE price > 80;
SELECT * FROM items WHERE price <= 300;
SELECT * FROM customers WHERE lastname = 'Smith';
SELECT * FROM customers WHERE lastname = 'Jones';
SELECT * FROM customers WHERE firstname != 'Scott';
