var express = require('express');
var router = express.Router();
const users = require("../controllers/usersController");

/* GET users listing. */
router.get('/', users.getUsers);
router.post('/login', users.authenticateUser);
router.post('/register', users.createUser);

module.exports = router;