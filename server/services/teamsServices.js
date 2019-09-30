const teamsModel = require('../models').TEAMS;

var teamsService = {};

teamsService.getTeams = () => {
    return teamsModel
        .findAll({ where: {} })
        .then(teams => {
            return teams;
        })
        .catch(error => { throw error; });
};

module.exports = teamsService;