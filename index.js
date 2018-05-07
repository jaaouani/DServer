'use strict';

const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const dashboard = express();
const port = process.env.PORT || 3000;

const models = require('./models');
const accountR = require('./routes/account');
const profileR = require('./routes/profile');
const propertyR = require('./routes/property');

dashboard.use(morgan('combined'));
dashboard.use(bodyparser.json());
dashboard.use(bodyparser.urlencoded({ extended: true }));
dashboard.use(passport.initialize());
    require('./config/passport')(passport);
dashboard.use('/api/v1/account', accountR);
dashboard.use('/api/v1/profile', profileR);
dashboard.use('/api/v1/property', propertyR);

models.sequelize.sync().then(() => { dashboard.listen(port, (error) => { if(error) { throw error; } console.log("Listening on port -= " + port); }); });
