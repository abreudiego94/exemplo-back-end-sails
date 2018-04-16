let bcrypt = require('bcrypt');
let SALT = 10;

module.exports = {
    attributes: {
      email: { type: 'string', required: true },
      senha: { type: 'string', required: true },
      
    },
    beforeCreate: function (attrs, cb) {
      bcrypt.hash(attrs.senha, SALT, function (err, hash) {
        attrs.senha = hash;
        return cb();    
      });
    },
  
    beforeUpdate: function (attrs, cb) {
      if(attrs.senha){
        bcrypt.genSalt(SALT, function(err, salt) {
          if (err) return cb(err);
          bcrypt.hash(attrs.senha, salt, function(err, crypted) {
            if(err) return cb(err);
  
            delete attrs.senha;
            attrs.senha = crypted;
            return cb();
          });
        });
      }
      else {
        return cb();
      }
    }

  };