'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

    router.post('update/name', passport.authenticate('jwt', { session: false }), (_request, _response) => { return _response.json({ message: 'hello' }); });
module.exports = router;