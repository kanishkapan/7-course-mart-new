"use client"; // This marks the file as a Client Component

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet'; // Import LatLngExpression for type checking
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS to style the map
import L from 'leaflet'; // Import Leaflet to use for custom icons

// Default location (Indore, India)
const defaultLocation: LatLngExpression = [22.7196, 75.8577];

// Array of locations where you want to add markers
const locations = [
  { lat: 22.7196, lng: 75.8577, name: "Indore, India" }, // Indore location
  { lat: 22.3026, lng: 70.8022, name: "Rajkot, India" },  // Rajkot location
  { lat: 23.0225, lng: 72.5714, name: "Ahmedabad, India" }, // Ahmedabad location
];

// Create a custom icon for the marker with a transparent background
const customIcon = new L.Icon({
  iconUrl: '/mnt/data/image.png', // Replace with the transparent marker image you uploaded
  iconSize: [32, 32], // Size of the marker
  iconAnchor: [16, 32], // Point of the icon which will correspond to the marker's position
  popupAnchor: [0, -32], // Point from which the popup will open relative to the iconAnchor
});

const Map: React.FC = () => {
  return (
    <MapContainer 
      center={defaultLocation} 
      zoom={12} 
      style={{ height: '500px', width: '100%' }} 
      zoomControl={false} // Disable zoom control (buttons)
    >
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Iterate over locations and add a marker for each */}
      {locations.map((location, index) => (
        <Marker 
          key={index} 
          position={[location.lat, location.lng]} 
          icon={customIcon}
        >
          <Popup>
            {location.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
