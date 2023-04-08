'use strict';

const firebase = require('../db');
const Ride = require('../models/carpoolRide');
const firestore = firebase.firestore();
const ref = firestore.collection('rides')

const playGame = async (req, res, next) => {
};

const startGame = async (req, res, next) => {
};

const initGame = async (req, res, next) => {
};

const awardPrizes = async (req, res, next) => {
};


module.exports = {
    playGame, startGame, initGame, awardPrizes
}