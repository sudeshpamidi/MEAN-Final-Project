'use strict';
module.exports = (sequelize, DataTypes) => {
    const LEAGUES = sequelize.define('LEAGUES', {
        NAME: DataTypes.STRING,
        CODE: DataTypes.STRING,
        DESCRIPTION: DataTypes.STRING
    }, { tableName: 'LEAGUES' });
    LEAGUES.associate = function(models) {
        // associations can be defined here
    };
    return LEAGUES;
};