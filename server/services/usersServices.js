const users = require('../models').USERS;

var usersService = {};

usersService.createUser = (oUser) => {
    return users
        .create(oUser)
        .then(user => { return user; })
        .catch(error => { throw error; });
};

usersService.getUsers = () => {
    return users
        .findAll()
        .then(users => {
            return users;
        })
        .catch(error => { throw error; });
};
usersService.authenticateUser = (oUser) => {
    return users
        .findOne({
            where: oUser
                // where: {
                //     PASSWORD: oUser.PASSWORD,
                //     or: [{ EMAIL: oUser.EMAIL }, { USER_NAME: oUser.USER_NAME }]
                // }
        })
        .then(user => {
            return user;
        })
        .catch(error => { throw error; });
};

usersService.deleteUser = (id) => {
    return users.destroy({ returning: true, where: { id: id } })
        .then(user => {
            return user;
        })
        .catch(error => { throw error; });
};

usersService.updateUser = (user) => {
    return users.update(user, { returning: true, where: { id: user.id } })
        .then(updatedUser => {
            return updatedUser;
        })
        .catch(error => { throw error; });
}
module.exports = usersService;