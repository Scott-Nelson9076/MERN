const express = require("express");
const app = express();

require('./config/jokes.config');
app.use(express.json(), express.urlencoded({extended:true}));
const AllJokeRoutes = require('./routes/jokes.route');
AllJokeRoutes(app);
app.listen(8000);