CREATE TABLE books (
   id serial PRIMARY KEY,
   title text UNIQUE,
   date_published date,
   page_count integer
);

 ALTER TABLE books
ALTER COLUMN title
         SET NOT NULL,
ALTER COLUMN date_published
         SET NOT NULL,
ALTER COLUMN page_count
         SET NOT NULL;

ALTER TABLE books
  ADD CHECK (length(title) > 0);

INSERT INTO books (title, date_published, page_count)
VALUES ('Foundation', '1951-06-01', 256),
       ('Hyperion', '1989-05-26', 482),
       ('I, Robot', '1950-12-02', 225),
       ('Ender''s Game', '1994-07-15', 324);

ALTER TABLE books
ADD COLUMN stock_price
           numeric(5, 2)
           DEFAULT 10.99,
ADD COLUMN promo_price
           numeric(5, 2)
           DEFAULT 9.99;

ALTER TABLE books
ADD CHECK (promo_price < stock_price);

CREATE TABLE authors (
   id serial PRIMARY KEY,
   name text NOT NULL
);

INSERT INTO authors (name)
VALUES ('Dan Simmons'),
       ('Isaac Asimov'),
       ('Orson Scott Card');

ALTER TABLE books
 ADD COLUMN author_id
            integer
 REFERENCES authors (id)
  ON DELETE CASCADE;

UPDATE books
   SET author_id = 1
 WHERE title = 'Hyperion';

UPDATE books
   SET author_id = 2
 WHERE title = 'Foundation'
    OR title = 'I, Robot';

UPDATE books
   SET author_id = 3
 WHERE title = 'Ender''s Game';

UPDATE books 
   SET stock_price = stock_price + stock_price * 0.1,
       promo_price = promo_price + promo_price * 0.1
 WHERE author_id IN 
       (SELECT id FROM authors
         WHERE name = 'Isaac Asimov');

INSERT INTO authors (name) VALUES ('Douglas Adams');

SELECT a.name AS author, b.title, date_part('year', b.date_published) AS year_published
  FROM authors AS a
       LEFT OUTER JOIN books AS b
       ON b.author_id = a.id
 ORDER BY year_published DESC;

SELECT a.name,
       COUNT(b.id) AS number_of_books,  
       MAX(page_count) AS maximum_page_count
  FROM books AS b
       INNER JOIN authors AS a
       ON b.author_id = a.id
 GROUP BY a.name
HAVING COUNT(b.id) > 1;