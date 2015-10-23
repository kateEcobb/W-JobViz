var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/Constants').ActionTypes;

var CHANGE_EVENT = 'change';

var user = {
  token: null
};

var UserStore = assign({}, EventEmitter.prototype, { 
  emitChange: function(){ 
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  setToken: function(user_data){ 
    user.token = user_data.token;
  }, 
  getUser: function(){ 
    return user;
  }, 
});

UserStore.dispatchToken = Dispatcher.register(function (dispatch) {
  var action = dispatch.action;
  if (action.type === ActionTypes.AUTHENTICATED) {
    UserStore.setUser(action.payload);
    UserStore.emitChange();
  }
});

module.exports = UserStore;
