const { connect, connection } = require('mongoose');
const express = require('express');

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Social-Network-Api', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});


module.exports = connection;
