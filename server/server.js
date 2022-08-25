// DATABASE TABLES

// CREATE TABLE users (
//   id SERIAL PRIMARY KEY,
//   email VARCHAR(100) NOT NULL,
//   password_hash VARCHAR(300) NOT NULL
// );

// CREATE TABLE user_notes (
//   id SERIAL PRIMARY KEY,
//   user_id int NOT NULL REFERENCES users(id),
//   title VARCHAR(30) DEFAULT Untitled,
//   text VARCHAR(2000) NOT NULL
// );

// CREATE TABLE stars (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(50) NOT NULL,
//   location VARCHAR(100),
//   in_constellation BOOL,
//   constellation_name VARCHAR(100)
// );

// CREATE TABLE galaxies (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(50) NOT NULL,
//   location VARCHAR(100)
// );