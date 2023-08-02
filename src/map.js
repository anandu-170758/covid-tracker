import React from "react";
import './map.css';
/*import {  MapContainer , TileLayer, Marker, Popup } from 'react-leaflet';

const position = [51.505, -0.09]
function Map({center,zoom}) {
  return (
    <div className="Map">
     <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  );
}*/
/*import { showDataOnMap } from "./util";*/
import {  MapContainer as LeafletMap , TileLayer, Marker, Popup } from 'react-leaflet';

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/*showDataOnMap(countries, casesType)*/}
      </LeafletMap>
    </div>
  );
}

export default Map;