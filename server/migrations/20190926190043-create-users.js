'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('USERS', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            USER_NAME: {
                type: Sequelize.STRING
            },
            FIRST_NAME: {
                type: Sequelize.STRING
            },
            LAST_NAME: {
                type: Sequelize.STRING
            },
            PASSWORD: {
                type: Sequelize.STRING
            },
            EMAIL: {
                type: Sequelize.STRING
            },
            IS_ADMIN: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('USERS');
    }
};