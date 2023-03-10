CREATE DATABASE Hot_cakes;
USE Hot_cakes;

CREATE TABLE hotcakes(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(80) NOT NULL,
    imagen VARCHAR(400) NOT NULL,
    descripcion VARCHAR(512) NOT NULL,
    handle VARCHAR(32) NOT NULL,
    precio FLOAT NOT NULL,
    created_at TIMESTAMP
);

CREATE TABLE Ingredientes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(80) NOT NULL,
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE necesita(
	idhotcakes INT(11) PRIMARY KEY REFERENCES hotcakes(id),
    idingredientes INT(11) PRIMARY KEY REFERENCES ingredientes(id),
    cantidad VARCHAR(40)
);

