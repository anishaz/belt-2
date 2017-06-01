let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
  username: {type:String, required:[true,"Username is required."]}
}, {timestamps:true});

mongoose.model('User', UserSchema);
