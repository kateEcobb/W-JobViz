var React = require('react');
var ReactDOM = require('react-dom');

//Components =========
var MapView = require('./Components/mapView.jsx');

//Flux ======
var ViewActions = require('./actions/ViewActions');
var ActionTypes = require('./constants/Constants');
var Dispatcher = require('./dispatcher/Dispatcher');

//Stores ======
var UserStore = require('./stores/UserStore');
var JobStore = require('./stores/JobStore');

var App = React.createClass({ 
  getInitialState: function(){ 
    return { 
      places: null
    }
  },

  componentWillMount: function(){ 

  },

  componentWillUnMount: function(){ 

  },

  render: function(){ 
    return (
    <div id='container'>
      <MapView/>
    </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('AppView'));
