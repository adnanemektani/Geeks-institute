-- EXERCISE 1
SELECT * FROM language;

SELECT f.title, f.description, l.name AS language_name
FROM film f
JOIN language l ON f.language_id = l.language_id;

SELECT f.title, f.description, l.name AS language_name
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id;

CREATE TABLE new_film (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

INSERT INTO new_film (name) VALUES
('Film A'),
('Film B'),
('Film C');

CREATE TABLE customer_review (
  review_id SERIAL PRIMARY KEY,
  film_id INT NOT NULL REFERENCES new_film(id) ON DELETE CASCADE,
  language_id INT NOT NULL REFERENCES language(language_id),
  title VARCHAR(200) NOT NULL,
  score INT CHECK (score BETWEEN 1 AND 10),
  review_text TEXT,
  last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Nice movie', 8, 'Good story'),
(2, 1, 'Great movie', 9, 'Very interesting');

DELETE FROM new_film WHERE id = 1;
SELECT * FROM customer_review;

-- EXERCISE 2
UPDATE film
SET language_id = 2
WHERE film_id IN (1,2,3);

SELECT
  tc.constraint_name,
  kcu.column_name,
  ccu.table_name AS ref_table,
  ccu.column_name AS ref_column
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu
  ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage ccu
  ON tc.constraint_name = ccu.constraint_name
WHERE tc.table_name = 'customer'
  AND tc.constraint_type = 'FOREIGN KEY';

DROP TABLE customer_review;

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

SELECT DISTINCT f.title, f.replacement_cost
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;

SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%'
  AND a.first_name = 'PENELOPE'
  AND a.last_name = 'MONROE';

SELECT f.title
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Documentary'
  AND f.length < 60
  AND f.rating = 'R';

SELECT DISTINCT f.title
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'MATTHEW'
  AND c.last_name = 'MAHAN'
  AND p.amount > 4
  AND r.return_date::date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT DISTINCT f.title, f.replacement_cost
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'MATTHEW'
  AND c.last_name = 'MAHAN'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC;