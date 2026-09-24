import React from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function GisHeatmap() {
  // Center of map (Synthetic data - New Delhi coordinates for demonstration)
  const center = [28.6139, 77.2090];
  
  // Synthetic high-risk zones predicted by XGBoost
  const riskZones = [
    { id: 1, position: [28.6150, 77.2100], radius: 400, risk: "High", window: "18:00-21:00" },
    { id: 2, position: [28.5900, 77.2200], radius: 600, risk: "Medium", window: "19:00-22:00" }
  ];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
      {/* Dark theme map tiles for cybersecurity aesthetic */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      
      {riskZones.map(zone => (
        <Circle
          key={zone.id}
          center={zone.position}
          radius={zone.radius}
          pathOptions={{ 
            color: zone.risk === "High" ? '#ef4444' : '#eab308', 
            fillColor: zone.risk === "High" ? '#ef4444' : '#eab308', 
            fillOpacity: 0.4 
          }}
        >
          <Popup>
            <div className="text-gray-900">
              <strong className="block text-lg border-b border-gray-300 mb-1">{zone.risk} Risk Zone</strong>
              <p className="m-0 text-sm">Predicted Window: <b>{zone.window}</b></p>
              <p className="m-0 text-sm text-red-600 font-semibold mt-1">Actionable Intelligence Triggered</p>
            </div>
          </Popup>
        </Circle>
      ))}
    </MapContainer>
  );
}
