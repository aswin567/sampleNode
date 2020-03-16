var Users = require('./user.controller');

module.exports = function(router) {
    router.post('/create', Users.createUser);
    router.get('/get', Users.getUsers);
    // router.get('/get/:name', Heros.getHero);
    // router.put('/update/:id', Heros.updateHero);
    // router.delete('/remove/:id', Heros.removeHero);
}