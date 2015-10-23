var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/Constants').ActionTypes;

var CHANGE_EVENT = 'change';

var jobs = {};

var JobStore = assign({}, EventEmitter.prototype, { 
  emitChange: function(){ 
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  setJobs: function(data){
    jobs = data.job_requests;
  },
  getJobs: function(){ 
    return jobs;
  }, 
 
});

JobStore.dispatchToken = Dispatcher.register(function(dispatch){ 
  var action = dispatch.action; 
  if(action.type === ActionTypes.JOBS_LOADED){ 
    PhotoStore.setJobs(action.payload);
    PhotoStore.emitChange();    
  }
});

module.exports = JobStore;
