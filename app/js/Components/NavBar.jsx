var React = require('react');

//For responsive scrolling
var Scroll = require('react-scroll');
var Link = Scroll.Link;
var Element = Scroll.Element;

var NavBar = React.createClass({ 
  render: function(){ 
    return ( 
     <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to="Home" spy={true} smooth={true} duration={500} className="navbar-brand page-scroll">Wonolo</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <Link to="map" spy={true} smooth={true} duration={500} className="page-scroll">Available Jobs</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
});

module.exports = NavBar;