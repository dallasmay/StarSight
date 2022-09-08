require("dotenv").config();
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const axios = require("axios");

const ASTRO_API_URL = "https://api.astronomyapi.com/api/v2";

const { CONNECTION_STRING, APPLICATION_ID, APPLICATION_SECRET } = process.env;

const apiHash = btoa(`${APPLICATION_ID}:${APPLICATION_SECRET}`);

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

const FEET_TO_METERS = 0.3048;

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
);
  CREATE TABLE checklist (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    name VARCHAR(75) NOT NULL,
    type VARCHAR(25) NOT NULL,
    isChecked BOOL NOT NULL
  );
  CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    title VARCHAR(50) NOT NULL,
    note VARCHAR(1000) NOT NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE
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
      .query(
        `SELECT password_hash, name, id FROM users WHERE email = '${email}'`
      )
      .then((dbRes) => {
        const { password_hash: passHash, name, id: userId } = dbRes[0][0];
        bcrypt.compare(password, passHash, (err, result) => {
          if (err) {
            return console.log(err);
          } else {
            return result
              ? res.status(200).send({ result, name, userId })
              : res.status(200).send({ result });
          }
        });
      })
      .catch((err) => console.log(err));
  },
  findBody: (req, response) => {
    const { body, latitude, longitude, elevation, unit, userDate, userTime } =
      req.body;
    let elevationInMeters;
    if (unit === "feet") {
      elevationInMeters = elevation * FEET_TO_METERS;
    } else {
      elevationInMeters = elevation;
    }
    // console.log(body, latitude, longitude, elevationInMeters, userDate, userTime);
    // Astro API Call
    axios
      .get(
        `${ASTRO_API_URL}/bodies/positions/${body}?latitude=${latitude}&longitude=${longitude}&elevation=${elevationInMeters}&from_date=${userDate}&to_date=${userDate}&time=${userTime}`,
        {
          headers: {
            Authorization: `Basic ${apiHash}`,
          },
        }
      )
      .then((res) => {
        response.status(200).send(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  },
  addChecklistItem: (req, res) => {
    const { userId, name, type, ischecked } = req.body;
    sequelize
      .query(
        `INSERT INTO checklist (user_id, name, type, isChecked)
    VALUES ('${userId}', $$${name}$$, '${type}', '${ischecked}')
    RETURNING *;`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },
  getAllChecklistItems: (req, res) => {
    const { userId } = req.body;
    sequelize
      .query(`SELECT * FROM checklist WHERE user_id = ${userId}`)
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },
  updateChecklistItem: (req, res) => {
    const { itemId, newCheckedStatus } = req.body;
    sequelize
      .query(
        `UPDATE checklist SET ischecked = '${newCheckedStatus}' WHERE id = ${itemId} RETURNING *`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => res.status(400).send(err));
  },
  addNoteItem: (req, res) => {
    const { userId, title, note } = req.body;
    sequelize
      .query(
        `INSERT INTO notes (user_id, title, note)
    VALUES ('${userId}', $$${title}$$, $$${note}$$)
    RETURNING *`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },
  getAllNoteItems: (req, res) => {
    const { userId } = req.body;

    sequelize
      .query(
        `SELECT * FROM notes 
      WHERE user_id = ${userId}
      ORDER BY id DESC`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },
  deleteNoteItem: (req, res) => {
    const { noteId } = req.body;

    sequelize.query(`DELETE FROM notes WHERE id = ${noteId}`).then(() => {
      res.status(200).send("Note successfully deleted")
    }).catch((err) => console.log(err));
  }
};
