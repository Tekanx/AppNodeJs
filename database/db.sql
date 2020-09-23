CREATE DATABASE db_links;

USE db_links;

CREATE TABLE usuarios(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    nombreCompleto VARCHAR(100) NOT NULL
);

ALTER TABLE usuarios
    ADD PRIMARY KEY (id);
