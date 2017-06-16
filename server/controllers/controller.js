let mongoose = require('mongoose');

let User = mongoose.model('User');
let Question = mongoose.model('Question');

module.exports = {
  logreg: (req,res) => {
    User.findOne({username: req.body.username}, (err, user) => {
      if(user == null){
        let newUser = new User(req.body);
        newUser.save((err, savedUser) => {
          if(err){
            console.log(err);
            return res.status(500).send("Sorry but you need to login in order to continue.");
          }else {
            req.session.user = savedUser;
            return res.json(savedUser);
          }
        })
      }else {
        req.session.user = user;
        return res.json(user);
      }
    })
  },

  current: (req,res) => {
    if(!req.session.user){
      return res.status(401).send("You need to log in.");
    }else{
      return res.json(req.session.user);
    }
  },

  logout: (req,res) => {
    req.session.destroy();
    res.redirect('/')
  },

  addQuestion: (req,res) => {
    if(!req.session.user){
      return res.sendStatus(401);
    } else {
      let question = new Question(req.body);
      question._user = req.session.user._id;
      question.save((err, newQuestion) => {
        if(err){
          let errors="";
          for(let i in err.errors){
            errors += err.errors[i].message + ',';
          }
          return res.status(500).send(errors);
        } else {
          return res.json(newQuestion);
        }
      })
    }
  },

  getQuestions: (req,res) => {
    Question.find({}).populate('_user').exec((err,questions) => {
      if(err){
        console.log(err);
      } else{
        return res.json(questions);
      }
    })
  },

  showQuestion: (req,res) => {
    Question.findOne({_id: req.params.id}, (err, question) => {
      if(err){
        console.log(err);
        return res.status(500).send("Error finding the survey question");
      } else {
        return res.json(question);
      }
    })
  },

  addVote1: (req,res) => {
    Question.findOne({_id: req.params.question_id}, (err, question) => {
      if(err){
        console.log(err);
        return res.status(500).send("Error adding your vote");
      } else {
        question.vote1 += 1;
        question.save((err, savedQuestion)=> {
          if(err){
            console.log(err);
          } else {
            return res.json(savedQuestion);
          }
        })
      }
    })
  },

  addVote2: (req,res) => {
    Question.findOne({_id: req.params.question_id}, (err, question) => {
      if(err){
        console.log(err);
        return res.status(500).send("Error adding your vote");
      } else {
        question.vote2 += 1;
        question.save((err, savedQuestion)=> {
          if(err){
            console.log(err);
          } else {
            return res.json(savedQuestion);
          }
        })
      }
    })
  },

  addVote3: (req,res) => {
    Question.findOne({_id: req.params.question_id}, (err, question) => {
      if(err){
        console.log(err);
        return res.status(500).send("Error adding your vote");
      } else {
        question.vote3 += 1;
        question.save((err, savedQuestion)=> {
          if(err){
            console.log(err);
          } else {
            return res.json(savedQuestion);
          }
        })
      }
    })
  },

  addVote4: (req,res) => {
    Question.findOne({_id: req.params.question_id}, (err, question) => {
      if(err){
        console.log(err);
        return res.status(500).send("Error adding your vote");
      } else {
        question.vote4 += 1;
        question.save((err, savedQuestion)=> {
          if(err){
            console.log(err);
          } else {
            return res.json(savedQuestion);
          }
        })
      }
    })
  },

  deleteQuestion: (req,res) => {
    Question.remove({_id: req.params.id}, (err, questions) => {
      if(err){
        console.log(err);
        return res.status(500).send("Error deleting the survey question.");
      } else {
        res.json(questions);
      }
    })
  }

}
