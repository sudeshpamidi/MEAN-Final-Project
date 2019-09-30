const models = require('../models');

// const userData = require('../seeders/users_data.json');
// models.USERS.destroy({ where: {} }).then(() => {
//     models.USERS.bulkCreate(userData).then(() => {
//         process.exit();
//     });
// });

// const leaguesData = require('./leagues_data.json');
// models.LEAGUES.destroy({ where: {} }).then(() => {
//     models.LEAGUES.bulkCreate(leaguesData).then(() => {
//         process.exit();
//     });
// });

const teamsData = require('./teams_data.json');
models.TEAMS.destroy({ where: {} }).then(() => {
    models.TEAMS.bulkCreate(teamsData).then(() => {
        process.exit();
    });
});