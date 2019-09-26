'use strict';
module.exports = (sequelize, DataTypes) => {
    const USERS = sequelize.define('USERS', {
        USER_NAME: DataTypes.STRING,
        FIRST_NAME: DataTypes.STRING,
        LAST_NAME: DataTypes.STRING,
        PASSWORD: DataTypes.STRING,
        EMAIL: DataTypes.STRING,
        IS_ADMIN: DataTypes.BOOLEAN
    }, { tableName: 'USERS' });
    USERS.associate = function(models) {
        // associations can be defined here
    };
    return USERS;
};