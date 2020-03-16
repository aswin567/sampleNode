var Users = require('./user.dao');

exports.createUser = function (req, res) {
    var user = {
        name: req.body.name,
        description: req.body.description
    };

    Users.create(user, function (err, user) {
        if (err) {
            res.status(404).json({ err });
            // stop further execution in this callback
            return;
        }
        res.json({
            message: "User created successfully"
        })
    });

}


exports.getUsers = function(req, res, next) {
    Users.get({}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            users: users
        })
    })
}