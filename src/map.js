import React from 'react'
import {Map as LeafletMap,TileLayer} from "react-leaflet";
import "./map.css"
function map() {
  return (
    <div className="Map">
      <LeafletMap>
      <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafletMap>
    </div>
  );
}

export default map