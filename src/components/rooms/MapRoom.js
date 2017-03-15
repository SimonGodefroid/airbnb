import React from 'react';
import Map from 'react-native-maps';

class MapRoom extends React.Component {
  render() {
    console.log('MapRoom',this.props);
    return (
      <Map
        initialRegion={{
          latitude: 48.8564449,
          longitude: 2.4002913,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={this.props.style}>
        <Map.Marker
          coordinate={{
            latitude: this.props.roomLat,
            longitude: this.props.roomLong,
          }}
          title={this.props.title}
          description={'React Native training institute'} />
          </Map>
    );
  }
}

export default MapRoom;