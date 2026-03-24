SELECT DISTINCT
  f.film_id,
  f.title,
  f.rating
FROM film f
WHERE f.rating IN ('G', 'PG')
  AND NOT EXISTS (
    SELECT 1
    FROM inventory i
    JOIN rental r ON r.inventory_id = i.inventory_id
    WHERE i.film_id = f.film_id
      AND r.return_date IS NULL
  )
ORDER BY f.title;

DROP TABLE IF EXISTS childrens_waiting_list;

CREATE TABLE childrens_waiting_list (
  waiting_id SERIAL PRIMARY KEY,
  customer_id INT NOT NULL REFERENCES customer(customer_id) ON DELETE CASCADE,
  film_id INT NOT NULL REFERENCES film(film_id) ON DELETE CASCADE,
  request_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO childrens_waiting_list (customer_id, film_id)
VALUES
  (1, 10),
  (2, 10),
  (3, 25),
  (4, 25),
  (5, 25),
  (6, 40);

SELECT
  f.film_id,
  f.title,
  COUNT(cwl.waiting_id) AS waiting_people
FROM childrens_waiting_list cwl
JOIN film f ON f.film_id = cwl.film_id
GROUP BY f.film_id, f.title
ORDER BY waiting_people DESC, f.title;
