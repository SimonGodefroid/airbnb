import React from 'react';
import Map from 'react-native-maps';

class MapRoom extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      position:{},
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => this.setState({position:position}))
  }
  
  render() {
    console.log('MapRoom',this.props);
    console.log('state.position',this.state.position);
    return (
      <Map
        initialRegion={{
          latitude: 48.8564449,
          longitude: 2.4002913,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        //utiliser region pour faire la géoloc
        style={this.props.style}>
        <Map.Marker
          coordinate={{
            latitude: this.props.roomLat,
            longitude: this.props.roomLong,
          }}
          title={this.props.title}
          description={this.props.title} />
      </Map>
    );
  }
}

export default MapRoom;