let controller = require('./../controllers/controller');

module.exports = app => {
  app.post('/api/login', controller.logreg);
  app.get('/api/current', controller.current);
  app.get('/api/questions', controller.getQuestions);
  app.post('/api/questions', controller.addQuestion);
  app.get('/api/questions/:id', controller.showQuestion);
  app.delete('/api/questions/:id', controller.deleteQuestion);
  app.get('/api/vote1/:question_id', controller.addVote1);
  app.get('/api/vote2/:question_id', controller.addVote2);
  app.get('/api/vote3/:question_id', controller.addVote3);
  app.get('/api/vote4/:question_id', controller.addVote4);
  app.get('/logout', controller.logout);
}
