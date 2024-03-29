import React from "react";
import './map.css';
import {  MapContainer as LeafletMap , TileLayer, Marker, Popup } from 'react-leaflet';
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/*loop through countries and draw circles*/}
        {showDataOnMap(countries,casesType )}
      </LeafletMap>
    </div>
  );
}

export default Map;