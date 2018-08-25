DROP DATABASE IF EXISTS tosser_DB;
CREATE DATABASE tosser_DB;
USE tosser_DB;

CREATE TABLE reservations (
    u_ID INT(11) NOT NULL PRIMARY KEY,
    name VARCHAR(30), 
    phone_num INT(30),
    email VARCHAR(100)
);