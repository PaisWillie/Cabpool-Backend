"use strict";

const firebase = require("../db");
const User = require("../models/user");
const firestore = firebase.firestore();

const registerUser = async (req, res, next) => {};

const loginUser = async (req, res, next) => {};

const getUser = async (req, res, next) => {};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};

export {};
