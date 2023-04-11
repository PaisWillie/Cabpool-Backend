const express = require('express');
const { calculatePayment } = require('../controllers/paymentController');

const router = express.Router();

router.post('/calculate', calculatePayments);

module.exports = {
  routes: router,
};
