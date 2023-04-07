const express = require('express');
const { getOffer, addOffer, updateOffer, deleteOffer } = require('../controllers/OffersController');

const router = express.Router();

router.get('/offer', getOffer);
router.post('/offer/add', addOffer);
router.post('/offer/update', updateOffer);
router.delete('/offer/delete', deleteOffer);



module.exports = {
  routes: router,
};
