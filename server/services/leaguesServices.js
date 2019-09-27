const leaguesModel = require('../models').LEAGUES;

var leaguesService = {};

leaguesService.getLeagues = () => {
    return leaguesModel
        .findAll({ where: {} })
        .then(leagues => {
            return leagues;
        })
        .catch(error => { throw error; });
};

module.exports = leaguesService;