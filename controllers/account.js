'use strict';

const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcryptjs = require('bcrypt');

const Account = require('../models').Account;
const accountSalt = bcryptjs.genSaltSync(12);

module.exports.login = (_request, _response) => {
    const email = _request.body.email;
    const password = _request.body.password;
if(email !== null && password !== null) {
    if((!validator.isEmpty(email)) && !validator.isEmpty(password)) {
        if(validator.isEmail(email) === true) {
            if(password.length >= 8 && password.length <= 20) { const hashedP = bcryptjs.hashSync(password, accountSalt);
                if(bcryptjs.compareSync(password, hashedP)) {
                    // loggin in the user.
                        Account.findOne({ where: { email: email } }).then((_user) => {
                            if(_user == null) { return _response.json({ status: 'error', message: 'Aucun compte trouvé.'}); }
                            const _token = jwt.sign({ user : _user }, '$2a$12$UWdFSS3kabEEY/9g20TSzehXdLW9fEtnRWURX1HtH/TGY6RkHrAmG', { expiresIn: 60*60 });
                            return _response.json({ status: 'success', message: 'Utilisateur Connecté', token: _token, expiresIn: 60*60 }); 
                        });
                } else { return _response.json({ status: 'error', message: 'Mot de passe fourni erronée.'}); }
            } else { return _response.json({ status: 'error', message: 'Veuillez insérer un mot de passe valide.'}); }
        } else { return _response.json({ status: 'error', message: 'Veuillez insérer une addresse email valide.'}); }
    } else { return _response.json({ status: 'error', message: 'Veuillez insérer des données valides.' }); }
} else { return _response.json({ status: 'error', message: 'Veuillez insérer des données valides.' }); }
}

module.exports.register = (_request, _response) => {
    const email = _request.body.email;
    const password = _request.body.password;
    const fullname = _request.body.fullname;
    console.log(email);
if(email !== null && password !== null && fullname !== null) {
    if((!validator.isEmpty(email)) && !validator.isEmpty(password) && !validator.isEmpty(fullname)) {
        if(validator.isEmail(email) === true) {
            if(password.length >= 8 && password.length <= 20) {
                if(fullname.length > 2) {
                    // creating the account.
                    const hashedP = bcryptjs.hashSync(password, accountSalt); const hashedT = bcryptjs.hashSync(fullname + email, accountSalt);
                    const reference = getUUID(); return Account.create({ token: hashedT, fullname: fullname,  email: email, password: hashedP, reference: reference, points: 20 })
                        .then((_account) => { return _response.json({ status: 'success', message: _account }); })
                        .catch((_error) => { return _response.json({ status: 'error', message: _error }); });
                    // logging in the account.

                } else { return _response.json({ status: 'error', message: 'Veuillez insérer un nom valide.'}); }
            } else { return _response.json({ status: 'error', message: 'Veuillez insérer un mot de passe valide.'}); }
        } else { return _response.json({ status: 'error', message: 'Veuillez insérer une addresse email valide.'}); }
    } else { return _response.json({ status: 'error', message: 'Veuillez insérer des données valides.' }); }
} else { return _response.json({ status: 'error', message: 'Veuillez insérer des données valides.' }); } 
}

function getUUID() { function char4() { return Math.floor((1 + Math.random()) * 0x10000) .toString(16) .substring(1); }
                     return '@'+char4()+'-'+char4(); }

// I count on passport.authenticate('jwt', { session : false }) to return Unanthenticated messsage.
module.exports.verify = (_request, _response) => { return _response.json({ status: 'success' }); }