
DROP DATABASE if exists eat_cake_db;
CREATE DATABASE eat_cake_db;

USE eat_cake_db;

CREATE TABLE cakes (
  id int(11) NOT NULL AUTO_INCREMENT,
  cakeName varchar(100) NOT NULL,
  devoured boolean NOT NULL DEFAULT FALSE,
  ddate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);