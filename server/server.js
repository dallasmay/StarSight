require("dotenv").config();
const { SERVER_PORT } = process.env;

const express = require("express");

const app = express();

app.use(express.json());

const { seed } = require("./controller");

// DEV ENDPOINTS
app.get("/seed", seed);

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});