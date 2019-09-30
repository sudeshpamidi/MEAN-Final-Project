var express = require('express');
var router = express.Router();
const teams = require("../controllers/teamsController");

/* GET users listing. */

router.get('/', teams.getTeams);


module.exports = router;