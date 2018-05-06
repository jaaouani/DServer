'use strict';

const passport = require("passport");
const passportjwt = require("passport-jwt");
const extractjwt = passportjwt.ExtractJwt;
const jwtstrategy = passportjwt.Strategy;

const Account = require('../models').Account;

module.exports = (passport) => {
        passport.use(new jwtstrategy({ jwtFromRequest: extractjwt.fromAuthHeaderAsBearerToken(), secretOrKey: '$2a$12$UWdFSS3kabEEY/9g20TSzehXdLW9fEtnRWURX1HtH/TGY6RkHrAmG'
        }, (_payload, _next) => { Account.findById(_payload.user.id).then((_user) => { if(_user) { return _next(null, _user); } else if(!_user) { return _next(null, false); } }).catch((_error) => { return _next(_error); }); }));
};