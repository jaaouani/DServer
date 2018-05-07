'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

const Ufullname = require('../controllers/profile').Ufullname;
const Upassword = require('../controllers/profile').Upassword;
const Uaddress = require('../controllers/profile').Uaddress;
const Uaddress2 = require('../controllers/profile').Uaddress2;
const Ucity = require('../controllers/profile').Ucity;
const Uzipcode = require('../controllers/profile').Uzipcode;
const Uphone = require('../controllers/profile').Uphone;
    router.post('/update/fullname', passport.authenticate('jwt', { session: false }), (_request, _response) => { return Ufullname(_request, _response); });
    router.post('/update/password', passport.authenticate('jwt', { session: false }), (_request, _response) => { return Upassword(_request, _response); });
    router.post('/update/address', passport.authenticate('jwt', { session: false }), (_request, _response) => { return Uaddress(_request, _response); });
    router.post('/update/address/2', passport.authenticate('jwt', { session: false }), (_request, _response) => { return Uaddress2(_request, _response); });
    router.post('/update/city', passport.authenticate('jwt', { session: false }), (_request, _response) => { return Ucity(_request, _response); });
    router.post('/update/zipcode', passport.authenticate('jwt', { session: false }), (_request, _response) => { return Uzipcode(_request, _response); });
    router.post('/update/phone', passport.authenticate('jwt', { session: false }), (_request, _response) => { return Uphone(_request, _response); });
module.exports = router;