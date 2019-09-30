const teamService = require('./../services/teamsServices');

module.exports = {
    getTeams(req, res, next) {
        return teamService.getTeams()
            .then(teams => {
                if (teams != null) {
                    res.json(teams);
                } else {
                    res.status(404).send("No teams found");
                }
            })
            .catch(error => res.status(400).send(error));
    }
}