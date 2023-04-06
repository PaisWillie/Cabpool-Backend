'use strict';

const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();

const registerUser = async (req, res, next) => { };

module.exports = {
    registerUser,
};
