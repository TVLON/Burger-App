DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
	ited_id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(50) NOT NULL,
	devoured BOOLEAN
);

SELECT * FROM burgers;