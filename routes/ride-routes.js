const express = require('express');
const {getRide, addRide, updateRide} = require('../controllers/ridesController');

const router = express.Router();

router.get('/ride', getRide);
router.post('/ride/add', addRide);
router.post('/rider/update', updateRide);



module.exports = {
  routes: router,
};
