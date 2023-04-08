'use strict';

const firebase = require('../db');
const Ride = require('../models/carpoolRide');
const firestore = firebase.firestore();
const ref = firestore.collection('rides')

const requestPayment = async (req, res, next) => {
};

const submitPayment = async (req, res, next) => {
};



module.exports = {
    requestPayment, submitPayment
}