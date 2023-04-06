"use strict";

const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/accountController");

const router = express.Router();

app.post("/login", loginUser);

app.post("/register", registerUser);

app.get("/user/:id", getUser);

module.exports = {
  routes: router,
};

export {};
