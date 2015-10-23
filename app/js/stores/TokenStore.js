var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/Constants').ActionTypes;

var CHANGE_EVENT = 'change';

var token = null;

var TokenStore = assign({}, EventEmitter.prototype, { 
  emitChange: function(){ 
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  setToken: function(data){ 
    token = data.token;
  }, 
  getToken: function(){ 
    return token;
  }, 
});

TokenStore.dispatchToken = Dispatcher.register(function (dispatch) {
  var action = dispatch.action;
  if (action.type === ActionTypes.AUTHENTICATED) {
    TokenStore.setToken(action.payload);
    TokenStore.emitChange();
  }
});

module.exports = TokenStore;
