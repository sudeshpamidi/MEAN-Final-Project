const userService = require('./../services/usersServices');

module.exports = {
    createUser(req, res) {
        return userService.createUser({
                USER_NAME: req.body.username,
                FIRST_NAME: req.body.firstname,
                LAST_NAME: req.body.lastname,
                PASSWORD: req.body.password,
                EMAIL: req.body.email,
                IS_ADMIN: req.body.isadmin
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    },
    getUsers(req, res, next) {
        return userService.getUsers()
            .then(users => {
                if (users != null) {
                    res.json(users);
                } else {
                    res.status(404).send("Fail");
                }
            })
            .catch(error => res.status(400).send(error));
    },
    getUser(req, res, next) {
        return userService.getUser(req.params.id)
            .then(user => {
                if (user != null) {
                    res.json(user);
                } else {
                    res.status(404).send("No user found");
                }
            })
            .catch(error => res.status(400).send(error));
    },
    authenticateUser(req, res, next) {
        return userService.authenticateUser({
                USER_NAME: req.body.username,
                PASSWORD: req.body.password
            })
            .then(user => {

                if (user != null) {
                    req.session.username = req.body.username;
                    req.session.isadmin = user.IS_ADMIN;
                    res.json(user);
                } else {
                    res.json({ "error": "Incorrect User Name or Password." });
                }
            })
            .catch(error => res.status(400).send(error));
    },
    deleteUser(req, res, next) {
        return userService.deleteUser(req.params.id)
            .then(user => {
                if (user) {
                    res.status(200).send('User has been deleted');
                } else
                    res.status(400).send('Ooops.. Something went wrong');
            })
            .catch(error => res.status(400).send(error));
    },

    // update user controller
    updateUser(req, res, next) {
        return userService.updateUser({
                id: req.params.id,
                EMAIL: req.body.email,
                // USER_NAME: req.body.username,
                // IS_ADMIN: req.body.isadmin
            })
            .then(user => { res.send(user) })
            .catch(error => res.status(400).send(error));
    }
}