const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', usersController.createContacts);

router.put('/:id', usersController.updateContacts);

router.delete('/:id', usersController.deleteContacts);

module.exports = router;