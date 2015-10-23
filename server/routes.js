var jobController = require('./controllers/JobController');

module.exports = function(app){
  app.get('/api/auth', jobController.authenticate);
  app.get('/api/jobs', jobController.getAllJobs);
};
