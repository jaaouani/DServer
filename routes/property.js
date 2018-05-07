'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

const newProperty = require('../controllers/property').newProperty;
    router.post('/new', passport.authenticate('jwt', { session: false }), (_request, _response) => { return newProperty(_request, _response); });
module.exports = router;