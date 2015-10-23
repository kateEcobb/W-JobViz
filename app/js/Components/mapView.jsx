var React = require('react');

//Leaflet for React
var Map = require('react-leaflet/lib/Map');
var TileLayer = require('react-leaflet/lib/TileLayer');
var Marker = require('react-leaflet/lib/Marker');
var Popup = require('react-leaflet/lib/Popup');

//Marker Styling
var AwesomeMarkers = require('../leaflet.awesome-markers');

//Access Tokens for Leaflet
var mapID = 'kateecobb.cig42pnzi2awuszkvrcdrke8j';
var AccessToken ='pk.eyJ1Ijoia2F0ZWVjb2JiIiwiYSI6ImNpZzQycHA1dzJhZjh1amx2YnM5YWJvdTYifQ.0-BucncJLGbexpv7_nr97g'; 

var MapView = React.createClass({ 
  getInitialState: function(){ 
    //setting the default properties for the markers
    return { 
      icon: L.AwesomeMarkers.icon({
        markerColor: 'orange', 
        icon: 'cog'
      }), 
      center: [37.792359,-122.404686], 
      zoom: 13
    };
  },

  render: function(){ 
    var context = this;
    var places = this.props.places.map(function(place){ 
      //if valid location, render a marker with information on each job
      if(place.latitude && place.longitude){
      return ( 
        <Marker position={[place.latitude, place.longitude]} id={place.id} icon={context.state.icon}> 
          <Popup> 
            <div className='jobPopup'>
              <p className='jobTitle'>{place.venue}</p>
              <p className='jobDesc'>{place.description}</p>
              <div className='jobButton'>Take This Job</div>
            </div>
          </Popup> 
        </Marker>
        );
      }
    });

    return ( 
      <Map id='map' center={this.state.center} zoom={this.state.zoom}>
        <TileLayer
          attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
          url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
          id={mapID}
          accessToken={AccessToken}/>
          {places}
      </Map>
    );
  }
});

module.exports = MapView;
