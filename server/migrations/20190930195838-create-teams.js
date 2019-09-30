'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('TEAMS', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            TEAM_NAME: {
                type: Sequelize.STRING
            },
            LEAGUE_ID: {
                type: Sequelize.INTEGER
            },
            MAX_TEAM_MEMBERS: {
                type: Sequelize.INTEGER
            },
            MIN_AGE: {
                type: Sequelize.INTEGER
            },
            MAX_AGE: {
                type: Sequelize.INTEGER
            },
            TEAM_GENDER: {
                type: Sequelize.STRING
            },
            MANAGER_NAME: {
                type: Sequelize.STRING
            },
            MANAGER_PHONE: {
                type: Sequelize.STRING
            },
            MANAGER_EMAIL: {
                type: Sequelize.STRING
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
        return queryInterface.dropTable('TEAMS');
    }
};