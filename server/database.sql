CREATE DATABASE cinema;

CREATE TABLE movielist (
    movie_id SERIAL PRIMARY KEY, 
    title VARCHAR (100), 
    rating int , 
    review VARCHAR (500),
    picture VARCHAR (300)
);