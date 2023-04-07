'use strict';

const firebase = require('../db');
const Rating = require('../models/carpoolOffers');
const firestore = firebase.firestore();
const ref = firestore.collection('offers')

const getOffer = async (req, res, next) => {
};

const addOffer = async (req, res, next) => {
};

const updateOffer = async (req, res, next) => {
};

const deleteOffer = async (req, res, next) => {

};


module.exports = {
    getOffer, addOffer, updateOffer, deleteOffer
};