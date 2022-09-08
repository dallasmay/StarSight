require("dotenv").config();
const { SERVER_PORT } = process.env;

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const {
  seed,
  register,
  login,
  findBody,
  addChecklistItem,
  updateChecklistItem,
  getAllChecklistItems,
  addNoteItem,
  getAllNoteItems,
  deleteNoteItem,
} = require("./controller");

// DEV ENDPOINTS
app.get("/seed", seed);

// ENDPOINTS
app.post("/register", register);
app.post("/login", login);

app.post("/find-body", findBody);

app.post("/checklist", addChecklistItem);
app.put("/checklist", updateChecklistItem);

app.post("/checklist-items", getAllChecklistItems);

app.post("/notes", addNoteItem);
app.post("/delete-note", deleteNoteItem);

app.post("/notes-items", getAllNoteItems)

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});