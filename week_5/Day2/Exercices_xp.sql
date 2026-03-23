-- Exercise 1

SELECT * 
FROM items
ORDER BY price ASC;

SELECT * 
FROM items
WHERE price >= 80
ORDER BY price DESC;

SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;

SELECT last_name
FROM customers
ORDER BY last_name DESC;

-- Exercise 2

SELECT * 
FROM customer;

SELECT first_name || ' ' || last_name AS full_name
FROM customer;

SELECT DISTINCT create_date
FROM customer;

SELECT *
FROM customer
ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

SELECT address, phone
FROM address
WHERE district = 'Texas';

SELECT *
FROM film
WHERE film_id IN (15,150);

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Inception';

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'In%';

SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

SELECT *
FROM film
ORDER BY rental_rate ASC
OFFSET 10 FETCH NEXT 10 ROWS ONLY;

SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p
ON c.customer_id = p.customer_id
ORDER BY c.customer_id;

SELECT f.*
FROM film f
LEFT JOIN inventory i
ON f.film_id = i.film_id
WHERE i.inventory_id IS NULL;

SELECT city.city, country.country
FROM city
JOIN country
ON city.country_id = country.country_id;

SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p
ON c.customer_id = p.customer_id
ORDER BY p.staff_id;