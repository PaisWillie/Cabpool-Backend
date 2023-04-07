const express = require('express');
const { addRequest, getRequest, updateRequest } = require('../controllers/requestsController');

const router = express.Router();

router.get('/request', getRequest);
router.post('/request/add', addRequest);
router.post('/request/update', updateRequest);



module.exports = {
  routes: router,
};
