-- Exercise 1 : DVD Rentals

SELECT
  r.rental_id,
  r.rental_date,
  r.return_date,
  c.customer_id,
  c.first_name,
  c.last_name,
  f.title
FROM rental r
JOIN customer c ON c.customer_id = r.customer_id
JOIN inventory i ON i.inventory_id = r.inventory_id
JOIN film f ON f.film_id = i.film_id
WHERE r.return_date IS NULL
ORDER BY r.rental_date;

SELECT
  c.customer_id,
  c.first_name,
  c.last_name,
  COUNT(*) AS not_returned_count
FROM rental r
JOIN customer c ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY not_returned_count DESC, c.last_name, c.first_name;

SELECT DISTINCT
  f.film_id,
  f.title
FROM film f
JOIN film_actor fa ON fa.film_id = f.film_id
JOIN actor a ON a.actor_id = fa.actor_id
JOIN film_category fc ON fc.film_id = f.film_id
JOIN category c ON c.category_id = fc.category_id
WHERE c.name = 'Action'
  AND a.first_name = 'JOE'
  AND a.last_name = 'SWANK'
ORDER BY f.title;

CREATE OR REPLACE VIEW v_outstanding_rentals AS
SELECT
  r.rental_id,
  r.rental_date,
  r.inventory_id,
  r.customer_id
FROM rental r
WHERE r.return_date IS NULL;

SELECT *
FROM v_outstanding_rentals
ORDER BY rental_date;


-- Exercise 2 – Happy Halloween

SELECT
  s.store_id,
  ci.city,
  co.country
FROM store s
JOIN address a ON a.address_id = s.address_id
JOIN city ci ON ci.city_id = a.city_id
JOIN country co ON co.country_id = ci.country_id
ORDER BY s.store_id;


  i.store_id,
  SUM(f.length) AS total_minutes,
  ROUND(SUM(f.length) / 60.0, 2) AS total_hours,
  ROUND(SUM(f.length) / 1440.0, 2) AS total_days
FROM inventory i
JOIN film f ON f.film_id = i.film_id
WHERE NOT EXISTS (
  SELECT 1
  FROM rental r
  WHERE r.inventory_id = i.inventory_id
    AND r.return_date IS NULL
)
GROUP BY i.store_id
ORDER BY i.store_id;

SELECT DISTINCT
  c.customer_id,
  c.first_name,
  c.last_name,
  ci.city
FROM customer c
JOIN address ca ON ca.address_id = c.address_id
JOIN city ci ON ci.city_id = ca.city_id
WHERE ci.city_id IN (
  SELECT a.city_id
  FROM store s
  JOIN address a ON a.address_id = s.address_id
)
ORDER BY ci.city, c.last_name, c.first_name;

SELECT DISTINCT
  c.customer_id,
  c.first_name,
  c.last_name,
  co.country
FROM customer c
JOIN address ca ON ca.address_id = c.address_id
JOIN city ci ON ci.city_id = ca.city_id
JOIN country co ON co.country_id = ci.country_id
WHERE co.country_id IN (
  SELECT co2.country_id
  FROM store s
  JOIN address a ON a.address_id = s.address_id
  JOIN city ci2 ON ci2.city_id = a.city_id
  JOIN country co2 ON co2.country_id = ci2.country_id
)
ORDER BY co.country, c.last_name, c.first_name;

DROP TABLE IF EXISTS safe_movie_list;

CREATE TABLE safe_movie_list (
  film_id INT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  length INT NOT NULL,
  CONSTRAINT safe_movie_text_chk CHECK (
    LOWER(title) NOT LIKE '%beast%'
    AND LOWER(title) NOT LIKE '%monster%'
    AND LOWER(title) NOT LIKE '%ghost%'
    AND LOWER(title) NOT LIKE '%dead%'
    AND LOWER(title) NOT LIKE '%zombie%'
    AND LOWER(title) NOT LIKE '%undead%'
    AND LOWER(COALESCE(description, '')) NOT LIKE '%beast%'
    AND LOWER(COALESCE(description, '')) NOT LIKE '%monster%'
    AND LOWER(COALESCE(description, '')) NOT LIKE '%ghost%'
    AND LOWER(COALESCE(description, '')) NOT LIKE '%dead%'
    AND LOWER(COALESCE(description, '')) NOT LIKE '%zombie%'
    AND LOWER(COALESCE(description, '')) NOT LIKE '%undead%'
  )
);

INSERT INTO safe_movie_list (film_id, title, description, length)
SELECT f.film_id, f.title, f.description, f.length
FROM film f
WHERE NOT EXISTS (
  SELECT 1
  FROM film_category fc
  JOIN category c ON c.category_id = fc.category_id
  WHERE fc.film_id = f.film_id
    AND c.name = 'Horror'
)
AND LOWER(f.title) NOT LIKE '%beast%'
AND LOWER(f.title) NOT LIKE '%monster%'
AND LOWER(f.title) NOT LIKE '%ghost%'
AND LOWER(f.title) NOT LIKE '%dead%'
AND LOWER(f.title) NOT LIKE '%zombie%'
AND LOWER(f.title) NOT LIKE '%undead%'
AND LOWER(COALESCE(f.description, '')) NOT LIKE '%beast%'
AND LOWER(COALESCE(f.description, '')) NOT LIKE '%monster%'
AND LOWER(COALESCE(f.description, '')) NOT LIKE '%ghost%'
AND LOWER(COALESCE(f.description, '')) NOT LIKE '%dead%'
AND LOWER(COALESCE(f.description, '')) NOT LIKE '%zombie%'
AND LOWER(COALESCE(f.description, '')) NOT LIKE '%undead%';

SELECT
  SUM(f.length) AS total_minutes,
  ROUND(SUM(f.length) / 60.0, 2) AS total_hours,
  ROUND(SUM(f.length) / 1440.0, 2) AS total_days
FROM film f;

SELECT
  SUM(s.length) AS total_minutes,
  ROUND(SUM(s.length) / 60.0, 2) AS total_hours,
  ROUND(SUM(s.length) / 1440.0, 2) AS total_days
FROM safe_movie_list s;
