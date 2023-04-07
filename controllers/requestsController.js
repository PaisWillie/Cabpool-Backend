'use strict';

const firebase = require('../db');
const Ride = require('../models/carpoolRequests');
const firestore = firebase.firestore();
const ref = firestore.collection('requests')

const getRequest = async (req, res, next) => {
};

const addRequest = async (req, res, next) => {
};

const updateRequest = async (req, res, next) => {
};


module.exports = {
    getRequest, addRequest, updateRequest
};