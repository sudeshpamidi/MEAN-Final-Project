const models = require('../models');

const leaguesData = require('./leagues_data.json');
models.LEAGUES.destroy({ where: {} }).then(() => {
    models.LEAGUES.bulkCreate(leaguesData).then(() => {
        process.exit();
    });
});