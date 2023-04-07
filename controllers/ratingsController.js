'use strict';

const firebase = require('../db');
const Rating = require('../models/rating');
const firestore = firebase.firestore();
const ref = firestore.collection('ratings')

const getRating = async (req, res, next) => {
};

const addRating = async (req, res, next) => {
};

const updateRating = async (req, res, next) => {
};


module.exports = {
    getRating, addRating, updateRating
};