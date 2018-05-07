'use strict';

const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcryptjs = require('bcrypt');

const Account = require('../models').Account;
const salt = bcryptjs.genSaltSync(12);

module.exports.retrieve = (_request, _response) => {
    const _authorization = _request.get('Authorization').replace("Bearer ", "");
    const _decoded = jwt.verify(_authorization, '$2a$12$UWdFSS3kabEEY/9g20TSzehXdLW9fEtnRWURX1HtH/TGY6RkHrAmG');
        Account.findOne({ where : { email: _decoded.user.email }}).then((_user) => {
            return _response.json({ status: 'success', message: _user });
        }).catch((_error) => { console.log(_error); });
}
module.exports.Ufullname = (_request, _response) => {
    const _authorization = _request.get('Authorization').replace("Bearer ", "");
    const _decoded = jwt.verify(_authorization, '$2a$12$UWdFSS3kabEEY/9g20TSzehXdLW9fEtnRWURX1HtH/TGY6RkHrAmG');
        Account.findOne({ where : { email: _decoded.user.email }}).then((_user) => {
            if(_user) { _user.update({ fullname: _request.body.fullname }, { where : { email: _decoded.user.email }})
                .then( () => { return _response.json({ status: 'success' }); })
                .error( (_error) => { console.log(_error); }); }
        }).catch((_error) => { console.log(_error); });        
}
module.exports.Upassword = (_request, _response) => {
    const _authorization = _request.get('Authorization').replace("Bearer ", "");
    const _decoded = jwt.verify(_authorization, '$2a$12$UWdFSS3kabEEY/9g20TSzehXdLW9fEtnRWURX1HtH/TGY6RkHrAmG');
        Account.findOne({ where : { email: _decoded.user.email }}).then((_user) => {
            if(_user) { _user.update({ password: bcryptjs.hashSync(_request.body.password, salt) }, { where : { email: _decoded.user.email }})
                .then( () => { return _response.json({ status: 'success' }); })
                .error( (_error) => { console.log(_error); }); }
        }).catch((_error) => { console.log(_error); });        
}
module.exports.Uaddress = (_request, _response) => {
    const _authorization = _request.get('Authorization').replace("Bearer ", "");
    const _decoded = jwt.verify(_authorization, '$2a$12$UWdFSS3kabEEY/9g20TSzehXdLW9fEtnRWURX1HtH/TGY6RkHrAmG');
        Account.findOne({ where : { email: _decoded.user.email }}).then((_user) => {
            if(_user) { _user.update({ address: _request.body.address }, { where : { email: _decoded.user.email }})
                .then( () => { return _response.json({ status: 'success' }); })
                .error( (_error) => { console.log(_error); }); }
        }).catch((_error) => { console.log(_error); });  
}
module.exports.Uaddress2 = (_request, _response) => {
    const _authorization = _request.get('Authorization').replace("Bearer ", "");
    const _decoded = jwt.verify(_authorization, '$2a$12$UWdFSS3kabEEY/9g20TSzehXdLW9fEtnRWURX1HtH/TGY6RkHrAmG');
        Account.findOne({ where : { email: _decoded.user.email }}).then((_user) => {
            if(_user) { _user.update({ address2: _request.body.address2 }, { where : { email: _decoded.user.email }})
                .then( () => { return _response.json({ status: 'success' }); })
                .error( (_error) => { console.log(_error); }); }
        }).catch((_error) => { console.log(_error); });  
}
module.exports.Uphone = (_request, _response) => {
    const _authorization = _request.get('Authorization').replace("Bearer ", "");
    const _decoded = jwt.verify(_authorization, '$2a$12$UWdFSS3kabEEY/9g20TSzehXdLW9fEtnRWURX1HtH/TGY6RkHrAmG');
        Account.findOne({ where : { email: _decoded.user.email }}).then((_user) => {
            if(_user) { _user.update({ phone: _request.body.phone }, { where : { email: _decoded.user.email }})
                .then( () => { return _response.json({ status: 'success' }); })
                .error( (_error) => { console.log(_error); }); }
        }).catch((_error) => { console.log(_error); });  
}
module.exports.Ucity = (_request, _response) => {
    const _authorization = _request.get('Authorization').replace("Bearer ", "");
    const _decoded = jwt.verify(_authorization, '$2a$12$UWdFSS3kabEEY/9g20TSzehXdLW9fEtnRWURX1HtH/TGY6RkHrAmG');
        Account.findOne({ where : { email: _decoded.user.email }}).then((_user) => {
            if(_user) { _user.update({ city: _request.body.city }, { where : { email: _decoded.user.email }})
                .then( () => { return _response.json({ status: 'success' }); })
                .error( (_error) => { console.log(_error); }); }
        }).catch((_error) => { console.log(_error); });  
}
module.exports.Uzipcode = (_request, _response) => {
    const _authorization = _request.get('Authorization').replace("Bearer ", "");
    const _decoded = jwt.verify(_authorization, '$2a$12$UWdFSS3kabEEY/9g20TSzehXdLW9fEtnRWURX1HtH/TGY6RkHrAmG');
        Account.findOne({ where : { email: _decoded.user.email }}).then((_user) => {
            if(_user) { _user.update({ zipcode: _request.body.zipcode }, { where : { email: _decoded.user.email }})
                .then( () => { return _response.json({ status: 'success' }); })
                .error( (_error) => { console.log(_error); }); }
        }).catch((_error) => { console.log(_error); });  
}