'use strict';

const firebase = require('../db');
const Ride = require('../models/carpoolRide');
const firestore = firebase.firestore();
const ref_offer = firestore.collection('offers');
const ref_request = firestore.collection('requests');

const offerCarpool = async (req, res, next) => {
};

const requestCarpool = async (req, res, next) => {
};

const findCarpool = async (req, res, next) => {
};


module.exports = {
    offerCarpool, requestCarpool, findCarpool
}