'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

const register = require('../controllers/account').register;
const login = require('../controllers/account').login;
const verify = require('../controllers/account').verify;
const retrieve = require('../controllers/profile').retrieve;

const accountC = require('../controllers/account');
    router.post('/account/login', (_request, _response) => { return login(_request, _response); });
    router.post('/account/register', (_request, _response) => { return register(_request, _response); });
    router.get('/token/verify', passport.authenticate('jwt', { session: false }), (_request, _response) => { return verify(_request, _response); });
    router.get('/account/profile', passport.authenticate('jwt', { session: false }), (_request, _response) => { return retrieve(_request, _response); });
module.exports = router;