const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes/alljokes',JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findAJoke);
    app.post('/api/jokes/',JokeController.createJoke);
    app.put('/api/jokes/update/:id', JokeController.updateJoke)
    app.delete('/api/jokes/delete/:id', JokeController.deleteJoke)
}