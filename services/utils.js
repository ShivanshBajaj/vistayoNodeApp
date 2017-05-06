var _ = require('underscore');
var bcrypt = require('bcrypt');

var utils = {
    validateEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    validatePassword: function (password){
        var minLength = 5;
        var maxlength = 15;

        if(password.length < minLength || password.length > maxlength)
          return false;

        return true;
    },
    uuid: function(){
        var uuidV4 = require('uuid/v4');
        return uuidV4();
    },
    getRandomCode: function(length){
        var code = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&";

        for( var i=0; i < length; i++ )
            code += possible.charAt(Math.floor(Math.random() * possible.length));

        return code;
    },
    hashPassword: function(password){
        return bcrypt.hashSync(password, 10);
    },
    comparePassword: function(password, hash){
        return bcrypt.compareSync(password, hash);
    },
};

module.exports = utils;