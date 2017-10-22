CREATE DATABASE bamazon_db;
USE bamazon_db;


CREATE TABLE products (
  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  departmen_name VARCHAR(100) NULL,
  price INT default 0,
  stock_quantity INT default 0, 
  PRIMARY KEY (position)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("maroon nail polish", "beauty products", 10, 8),
("salsa", "food", 5, 15),
("chips", "food", 4, 17),
("pumpkin scented candle", "home", 12, 4),
("coffee beans", "food", 8, 12),
("french press", "home", 15, 7),
("fuzzy socks", "clothes", 6, 14),
("journal", "office supplies", 15, 3),
("gel pen", "office supplies", 3, 19),
("hair spray", "beauty products", 9, 13);