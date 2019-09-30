'use strict';
module.exports = (sequelize, DataTypes) => {
    const TEAMS = sequelize.define('TEAMS', {
        TEAM_NAME: DataTypes.STRING,
        LEAGUE_ID: DataTypes.INTEGER,
        MAX_TEAM_MEMBERS: DataTypes.INTEGER,
        MIN_AGE: DataTypes.INTEGER,
        MAX_AGE: DataTypes.INTEGER,
        TEAM_GENDER: DataTypes.STRING,
        MANAGER_NAME: DataTypes.STRING,
        MANAGER_PHONE: DataTypes.STRING,
        MANAGER_EMAIL: DataTypes.STRING
    }, { tableName: 'TEAMS' });
    TEAMS.associate = function(models) {
        // associations can be defined here
    };
    return TEAMS;
};