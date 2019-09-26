const models = require('../models').USERS;

const userData = require('../seeders/users_data.json');
models.destroy({ where: {} }).then(() => {
    models.bulkCreate(userData).then(() => {
        process.exit();
    });
});

// const leaguesData = require('./leagues_data.json');
// models.Leagues.destroy({ where: {} }).then(() => {
//     models.Leagues.bulkCreate(leaguesData).then(() => {
//         process.exit();
//     });
// });