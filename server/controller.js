require("dotenv").config();
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  // OTHER TABLES

  /* CREATE TABLE user_notes (
  id SERIAL PRIMARY KEY,
  user_id int NOT NULL REFERENCES users(id),
  title VARCHAR(30) DEFAULT Untitled,
  text VARCHAR(2000) NOT NULL
);

CREATE TABLE stars (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(100),
  in_constellation BOOL,
  constellation_name VARCHAR(100)
);

CREATE TABLE galaxies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(100)
)*/
  seed: (req, res) => {
    sequelize
      .query(
        `
  CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(300) NOT NULL
);`
      )
      .then(() => {
        res.status(200).send();
        console.log("Database seeded successfully");
      })
      .catch((err) => console.log("Error seeding database", err));
  },
  register: (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return console.log(err);
      } else {
        sequelize
          .query(
            `INSERT INTO users (name, email, password_hash)
    VALUES('${name}', '${email}', '${hash}');`
          )
          .then((dbRes) => res.status(200).send("User successfully registered"))
          .catch((err) => {
            res.status(500).send({ err, message: "Error registering user" });
          });
      }
    });
  },
  login: (req, res) => {
    const { email, password } = req.body;
    sequelize
      .query(`SELECT password_hash FROM users WHERE email = '${email}'`)
      .then((dbRes) => {
        const passHash = dbRes[0][0].password_hash;
        bcrypt.compare(password, passHash, (err, result) => {
          if (err) {
            return console.log(err);
          } else {
            return res.status(200).send(result);
          }
        });
      })
      .catch((err) => console.log(err));
  },
};
