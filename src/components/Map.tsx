import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const Map = () => {
  return (
    <div className="w-full">
      <MapContainer center={[50.4379357,2.64950395]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50.4379357,2.6495039]}>
          <Popup>
            11 résidence des oiseaux
            <br />
            62530 - Hersin-Coupigny
            <br />
            France
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
