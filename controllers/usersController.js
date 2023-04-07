'use strict';

const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();
const ref = firestore.collection('users')


// ref = firestore.getInstance().getReference()


const addUser = async (req, res, next) => {
  try {
    const data = req.body;
    await ref.add(data);
    res.send(checkForDuplicateEmails());
    }
   catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUser = async (req, res, next) => {

};

const deleteUser = async (req, res, next) => {

};

const getUser = async (req, res, next) => {

};

module.exports = {
  addUser, updateUser, deleteUser, getUser
};
