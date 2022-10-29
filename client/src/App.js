import './App.css';
import logo from './logo.svg'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useState, useEffect } from 'react';
import { Icon } from "leaflet";

const logoIcon = new Icon({
  iconUrl: logo,
  iconSize: [25, 25]
});

function App() {


  const [positions, setPosition] = useState([{lat: 22.302711, lng: 114.177216, name: 'Hong Kong'}]);
  useEffect(() => {
    fetch('https://home.houyewei.com/positions')
      .then((response) => response.json())
      .then((data) => {
        setPosition(data.positions)
      });
  }, []);

  const Positions = positions.map(position => 
    <Marker key={position.name} position={[position.lat,position.lng]} icon={logoIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  )

  return (
    <div className="App">
      <div className="Map">
        <MapContainer center={[positions[0].lat,positions[0].lng]} zoom={3} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          { Positions }
          
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
