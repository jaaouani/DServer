'use strict';

const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcryptjs = require('bcrypt');

const Account = require('../models').Account;

module.exports.retrieve = (_request, _response) => {
    const _authorization = _request.get('Authorization').replace("Bearer ", "");
    const _decoded = jwt.verify(_authorization, '$2a$12$UWdFSS3kabEEY/9g20TSzehXdLW9fEtnRWURX1HtH/TGY6RkHrAmG');
        Account.findOne({ where : { email: _decoded.user.email }}).then((_user) => {
            return _response.json({ status: 'success', message: _user });
        }).catch((_error) => { console.log(_error); });
}