-- Create FirstTab
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
);

-- Insert data into FirstTab
INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

-- Check FirstTab
SELECT * FROM FirstTab;


-- Create SecondTab
CREATE TABLE SecondTab (
    id integer 
);

-- Insert data into SecondTab
INSERT INTO SecondTab VALUES
(5),
(NULL);

-- Check SecondTab
SELECT * FROM SecondTab;


-- Q1
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft 
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );
-- Answer: 0
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );


-- Q2
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft 
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );
-- Answer: 2  (ids 6 and 7)
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );


-- Q3
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft 
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab );
-- Answer: 0  (because SecondTab has NULL, NOT IN with NULL always FALSE)
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab );


-- Q4
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft 
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );
-- Answer: 2  (ids 6 and 7)
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );