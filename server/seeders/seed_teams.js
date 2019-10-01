const models = require('../models');

const teamsData = require('./teams_data.json');
models.TEAMS.destroy({ where: {} }).then(() => {
    models.TEAMS.bulkCreate(teamsData).then(() => {
        process.exit();
    });
});