'use strict';

const jwt = require('jsonwebtoken');
const validator = require('validator');

const Property = require('../models').Property;

module.exports.newProperty = (_request, _response) => {
    const { name, description, email, logement, location, usertoken } = _request.body;
}