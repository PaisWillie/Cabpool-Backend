const express = require('express');
const { requestPayment, submitPayment } = require('../controllers/paymentController');

const router = express.Router();

// requesting payment
router.post('/request', requestPayment);

// submitting payment
 router.post('/submit', submitPayment);


module.exports = {
  routes: router,
};
