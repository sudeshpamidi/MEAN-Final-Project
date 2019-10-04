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
    },
    addTeam(req, res, next) {
        return teamService.addTeam({
            TEAM_NAME: req.body.teamname,
            LEAGUE_ID: req.body.leagueid,
            MAX_TEAM_MEMBERS: req.body.maxteammemeber,
            MIN_AGE: req.body.minage,
            MAX_AGE: req.body.maxage,
            TEAM_GENDER: req.body.teamgender,
            MANAGER_NAME: req.body.managername,
            MANAGER_PHONE: req.body.managerphone,
            MANAGER_EMAIL: req.body.manageremail
         }
        )
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