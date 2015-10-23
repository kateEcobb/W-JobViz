var ActionTypes = require('../constants/Constants').ActionTypes;
var Dispatcher = require('../dispatcher/Dispatcher');
var TokenStore = require('../stores/TokenStore');
var util = require('../utils.js');


var ViewActions = {
  getToken: function(){ 
    return util.authenticate()
    .then(function(data){ 
      Dispatcher.handleViewAction({ 
        type: ActionTypes.AUTHENTICATED, 
        payload: data
      });
    })
    .catch(function(err){ 
      throw err;
    });
  }, 
  getAllJobs: function(token){ 
    return util.getJobs(token)
    .then(function(jobs){ 
      Dispatcher.handleViewAction({ 
        type: ActionTypes.JOBS_LOADED,
        payload: jobs
      });
    })
    .catch(function(err){ 
      throw err;
    });
  }
};

module.exports = ViewActions;
