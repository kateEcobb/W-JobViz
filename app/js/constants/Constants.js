var keyMirror = require('keymirror');

module.exports = { 
  ActionTypes: keyMirror({ 
    AUTHENTICATED: null, 
    JOBS_LOADED: null
  }), 

  ActionSources: keyMirror({
    VIEW_ACTION: null
  }), 
};

