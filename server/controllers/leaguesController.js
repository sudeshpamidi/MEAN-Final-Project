const leagueService = require('./../services/leaguesServices');

module.exports = {
    getLeagues(req, res, next) {
        return leagueService.getLeagues()
            .then(leagues => {
                if (leagues != null) {
                    res.json(leagues);
                } else {
                    res.status(404).send("No leagues found");
                }
            })
            .catch(error => res.status(400).send(error));
    }
}