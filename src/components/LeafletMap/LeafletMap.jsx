import React from "react";
import PropTypes from "prop-types";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./leafletmap.css";

const settings = {
  doubleClickZoom: true,
  closePopupOnClick: false,
  dragging: false,
  zoomSnap: true,
  zoomDelta: true,
  trackResize: false,
  touchZoom: false,
  scrollWheelZoom: false,
};

export default class LeafletMap extends React.Component {
  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,

    /** If set, will display a marker, which when clicked will display this text **/
    markerText: PropTypes.string,
  };

  static defaultProps = {
    position: [51, -1],
    zoom: 13,
    markerText: "",
  };

  render() {
    return (
      <Map center={this.props.position} zoom={this.props.zoom} {...settings}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.props.markerText != "" && (
          <Marker position={this.props.position}>
            <Popup>{this.props.markerText}</Popup>
          </Marker>
        )}
      </Map>
    );
  }
}
