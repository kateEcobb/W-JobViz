var React = require('react');

//Leaflet for React
var Map = require('react-leaflet/lib/Map');
var TileLayer = require('react-leaflet/lib/TileLayer');
var Marker = require('react-leaflet/lib/Marker');
var Popup = require('react-leaflet/lib/Popup');

//Marker Styling
var AwesomeMarkers = require('../leaflet.awesome-markers');

var MapView = React.createClass({ 
  getDefaultProps: function(){ 
    return { 
      center: [37.792359,-122.404686],
      zoom: 9, 
      places: [ 
        {id:'A', lat: 37.7919322, lng:-122.4081412}, 
        {id:'B', lat: 37.645251, lng:-122.41935}
      ]
    };
  },

  getInitialState: function(){ 
    return { 
      icon: L.AwesomeMarkers.icon({
        icon: 'coffee', 
        markerColor: 'orange'
      })
    }
  },

  render: function(){ 
    var context = this;
    var places = this.props.places.map(function(place){ 
      return ( 
        <Marker position={[place.lat, place.lng]} id={place.id} icon={context.state.icon}> 
          <Popup> 
            <span>{place.id}</span>
          </Popup> 
        </Marker>
        );
    });

    return ( 
      <Map id='map' center={this.props.center} zoom={this.props.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
          {places}
      </Map>
    );
  }
});

module.exports = MapView;
