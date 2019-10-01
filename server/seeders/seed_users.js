const models = require('../models');

const userData = require('../seeders/users_data.json');
models.USERS.destroy({ where: {} }).then(() => {
    models.USERS.bulkCreate(userData).then(() => {
        process.exit();
    });
});