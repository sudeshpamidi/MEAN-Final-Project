var express = require('express');
var router = express.Router();
const users = require("../controllers/usersController");

/* GET users listing. */
router.get('/:id', users.getUser);
router.get('/', users.getUsers);
router.post('/login', users.authenticateUser);
router.post('/register', users.createUser);
router.delete('/:id', users.deleteUser);
router.put('/:id', users.updateUser);



module.exports = router;