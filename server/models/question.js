let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let QuestionSchema = new mongoose.Schema({
  question: {type:String, required:[true,"Question is required."], minlength:[8,"Question should be at least 8 characters."]},
  option1: {type:String, required:[true,"Option 1 is required."], minlength:[3,"Option 1 should be at least 3 characters."]},
  option2: {type:String, required:[true,"Option 2 is required."], minlength:[3,"Option 2 should be at least 3 characters."]},
  option3: {type:String, required:[true,"Option 3 is required."], minlength:[3,"Option 3 should be at least 3 characters."]},
  option4: {type:String, required:[true,"Option 4 is required."], minlength:[3,"Option 4 should be at least 3 characters."]},
  vote1:{type:Number, default:0},
  vote2:{type:Number, default:0},
  vote3:{type:Number, default:0},
  vote4:{type:Number, default:0},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps:true});

mongoose.model('Question', QuestionSchema);
