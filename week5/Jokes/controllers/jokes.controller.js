const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then((allJokes) => {res.json({jokes: allJokes})})
        .catch((err) => {res.json({message: 'No Go Good Buddy', error:err})});
}

module.exports.findAJoke = (req,res) => {
    Joke.findOne({_id:req.params.id})
        .then(aJoke => {res.json({joke:aJoke})})
        .catch((err) => {res.json({message: 'No Go Good Buddy', error:err})});
}

module.exports.createJoke = (req,res) => {
    const {body} = req;
    Joke.create(body)
        .then(newestJoke => {res.json({joke:newestJoke})})
        .catch((err) => {res.json({message: 'No Go Good Buddy', error:err})});
}

module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id:req.params.id})
        .then (result => {res.json({result: result})})
        .catch((err) => {res.json({message: 'No Go Good Buddy', error:err})});
}

module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate ({_id:req.params.id},req.body,{new:true, runValidators:true})
        .then(updatedJoke => {res.json({joke: updatedJoke})})
        .catch((err) => {res.json({message: 'No Go Good Buddy', error:err})});
}