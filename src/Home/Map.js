import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Data from '../Data/store_directory';

const Marker = () => (
    <div style={{color:"#d60093"}}> 
        <i class="fas fa-suitcase"></i>
    </div>);

const getMarkers = () => {
    const markerArray = Data.map((element) => {
        return (<Marker lat={element.Coordinates.lat} lng={element.Coordinates.lng} text={element.Name} />)
    })
    return markerArray;
}

class Map extends Component {
  static defaultProps = {
    center: {
        lat: 19.43,
        lng: -99.13
    },
    zoom: 13
    
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBYKb22rHjTAooeyz_Mrfg0ku35OhDMFyw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} 
          >

          {getMarkers()}

        </GoogleMapReact>
      </div>

    );
  }
}
 
export default Map;

// import React from 'react';
// import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

// class MapComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {}
//     }
//     // binding this to event-handler functions
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.onMapClick = this.onMapClick.bind(this);
//   }

//   onMarkerClick = (props, marker, e) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }

//   onMapClick = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   }

//   render() {
//     const style = {
//       width: '50vw',
//       height: '75vh',
//       'marginLeft': 'auto',
//       'marginRight': 'auto'
//     }

//     return (
//       <Map
//         item
//         xs = { 12 }
//         style = { style }
//         google = { this.props.google }
//         onClick = { this.onMapClick }
//         zoom = { 14 }
//         initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
//       >
//         <Marker
//           onClick = { this.onMarkerClick }
//           title = { 'Changing Colors Garage' }
//           position = {{ lat: 39.648209, lng: -75.711185 }}
//           name = { 'Changing Colors Garage' }
//         />
//         <InfoWindow
//           marker = { this.state.activeMarker }
//           visible = { this.state.showingInfoWindow }
//         >
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyBYKb22rHjTAooeyz_Mrfg0ku35OhDMFyw')
// })(MapComponent)