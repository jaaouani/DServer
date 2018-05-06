'use strict';

const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const dashboard = express();
const port = 3000 || process.env.PORT;

const models = require('./models');
const accountR = require('./routes/account');
const profileR = require('./routes/profile');

dashboard.use(morgan('combined'));
dashboard.use(bodyparser.json());
dashboard.use(bodyparser.urlencoded({ extended: true }));
dashboard.use(passport.initialize());
    require('./config/passport')(passport);
dashboard.use('/api/v1', accountR);
dashboard.use('/api/v1/profile', profileR);

models.sequelize.sync().then(() => { dashboard.listen(port, (error) => { if(error) { throw error; } console.log("Listening on port -= " + port); }); });