const express = require('express');
const { addUser, updateUser, deleteUser, getUser } = require('../controllers/usersController');

const router = express.Router();

router.post('/user/add', addUser);
router.post('/user/update', updateUser);
router.delete('/user/delete', deleteUser);
router.get('/user', getUser);

module.exports = {
  routes: router,
};
