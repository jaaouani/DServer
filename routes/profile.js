'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

const Ufullname = require('../controllers/profile').Ufullname;
    router.post('/update/fullname', passport.authenticate('jwt', { session: false }), (_request, _response) => { return Ufullname(_request, _response); });
module.exports = router;