var React = require('react');
var ReactDOM = require('react-dom');

//Components =========
var MapView = require('./Components/mapView.jsx');

//Flux ======
var ViewActions = require('./actions/ViewActions');
var ActionTypes = require('./constants/Constants');
var Dispatcher = require('./dispatcher/Dispatcher');

//Stores ======
var TokenStore = require('./stores/TokenStore');
var JobStore = require('./stores/JobStore');

var App = React.createClass({ 
  getInitialState: function(){ 
    return { 
      places: null, 
      token: null, 
      loading: true
    }
  },

  componentWillMount: function(){ 
    ViewActions.getToken();
    TokenStore.addChangeListener(this.setToken);
    JobStore.addChangeListener(this.setJobs);
  },

  setToken: function(){ 
    this.setState({token: TokenStore.getToken()});
    ViewActions.getAllJobs(this.state.token);
  },

  setJobs: function(){ 
    this.setState({places: JobStore.getJobs()});
    this.setState({loading: false});
  },

  componentWillUnMount: function(){ 
    TokenStore.removeChangeListener(this.setToken);
    JobStore.removeChangeListener(this.setJobs);
  },

  render: function(){ 
    if(this.state.loading){ 
      return ( 
        <div className="spinner-container">
          <div className="spinner-loader">Loading…</div>
        </div>
        )
    } else {
     return (
      <div id='container'>
        <h1 id='appTitle'>Local Jobs</h1>
        <MapView places={this.state.places}/>
      </div>
    );
  }
  }
});

ReactDOM.render(<App/>, document.getElementById('AppView'));
