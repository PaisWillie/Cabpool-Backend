const express = require('express');
const {getTaxi} = require('../controllers/taxisController');

const router = express.Router();

router.get('/taxi/add', getTaxi);


module.exports = {
  routes: router,
};
