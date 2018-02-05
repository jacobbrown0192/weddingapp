'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
var autoIncrement = require('mongoose-auto-increment');

var UserSchema = new Schema({
    password: { type: String, required: true },
    access: { type: Number, required: true, default: 1}
});
//
autoIncrement.initialize(mongoose.connection);


//Remove crypto stuff to get just string compares. could be fine for this application.
UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
//
UserSchema.plugin(autoIncrement.plugin, 'User');
module.exports = mongoose.model('User', UserSchema);
