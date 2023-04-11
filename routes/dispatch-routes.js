const express = require('express');
const { offerCarpool, requestCarpool, selectCarpool, acceptCarpool } = require('../controllers/dispatchController');


const router = express.Router();

// Offer Carpool
router.get('/offer', offerCarpool);

// Request Carpool
router.post('/request', requestCarpool);

// Select a Carpool
router.post('/select', selectCarpool);

// Accepts a carpool Request
router.post('./accept', acceptCarpool);



module.exports = {
  routes: router,
};
