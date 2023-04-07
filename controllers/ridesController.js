'use strict';

const firebase = require('../db');
const Ride = require('../models/carpoolRide');
const firestore = firebase.firestore();
const ref = firestore.collection('rides')

const getRide = async (req, res, next) => {
};

const addRide = async (req, res, next) => {
};

const updateRide = async (req, res, next) => {
};


module.exports = {
    getRide, addRide, updateRide
}