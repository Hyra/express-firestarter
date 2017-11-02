var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    Schema = mongoose.Schema;

var slugHero = require('mongoose-slug-hero');

var UserSchema = new Schema({
  name: {type: String },
  email: {type: String }
})

UserSchema.plugin(slugHero, {
    doc: 'user',
    field: 'name',
    replacement: '-',
    symbols: true,
    remove: /[.]/g,
    lower: false
})

module.exports = mongoose.model('User', UserSchema);
