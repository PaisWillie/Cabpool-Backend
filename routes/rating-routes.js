const express = require('express');
const { getRating, addRating, updateRating } = require('../controllers/RatingsController');

const router = express.Router();

router.get('/rating', getRating);
router.post('/rating/add', addRating);
router.post('/rating/update', updateRating);



module.exports = {
  routes: router,
};
