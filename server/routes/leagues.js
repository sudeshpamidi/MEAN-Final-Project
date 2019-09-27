var express = require('express');
var router = express.Router();
const users = require("../controllers/leaguesController");

/* GET all the leagues. */
router.get('/', users.getLeagues);


module.exports = router;