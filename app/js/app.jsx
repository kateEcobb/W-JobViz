var React = require('react');
var ReactDOM = require('react-dom');

//For responsive scrolling
var Scroll = require('react-scroll');
var Link = Scroll.Link;
var Element = Scroll.Element;

//Components =========
var MapView = require('./Components/mapView.jsx');
var NavBar = require('./Components/NavBar.jsx');

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
    };
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
        );
    } else {
     return (
      <div id='appcontainer'>
        <NavBar/>
        <header>
        <Element name='Home' className="container">
            <div className="intro-text">
                <div className="intro-lead-in">Spend Your Time Better.</div>
                <div className="intro-heading">Work. Now. Locally.</div>
                <Link to="map" spy={true} smooth={true} duration={500} className="page-scroll btn btn-xl">See Jobs</Link>
            </div>
          </Element>
        </header>
        <section id="services">
        <div className="container">
            <div className="row">
                <Element name='map' className="col-lg-12 text-center">
                    <h2 className="section-heading">Local Jobs</h2>
                    <h3 className="section-subheading text-muted">There are {this.state.places.length} jobs near you.</h3>
                    <MapView places={this.state.places}/>
                </Element> 
            </div> 
        </div> 
        </section>
      </div>
    );
  }
  }
});

ReactDOM.render(<App/>, document.getElementById('page-top'));
