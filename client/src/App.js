import './App.css';
import logo from './logo.svg'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import React, { useState, useEffect } from 'react';
import { Icon } from "leaflet";
import { BingLayer } from 'react-leaflet-bing-v2'

import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';

// import { GoogleLayer } from 'react-leaflet-google-v2'

const logoIcon = new Icon({
  iconUrl: logo,
  iconSize: [25, 25]
});

function App() {

  const key = "AIzaSyDp9HNrVKgfwjPqj5Mz6x8jS7t-_u2MoBI";
  var BING_KEY = 'Am7D2syhNLibITjOzf1yxOwVeqr9juVysjL1M5J9q1igpLtOkqP8Oo1kvSawlNcM'

  const [positions, setPosition] = useState([{lat: 22.302711, lng: 114.177216, name: 'Hong Kong'}]);
  const [isChina, setIsChina] = useState(false);
  useEffect(() => {
    fetch('https://home.houyewei.com/positions')
      .then((response) => response.json())
      .then((data) => {
        setPosition(data.positions)
      });
    fetch('https://home.houyewei.com/ipgeo')
      .then((response) => response.json())
      .then((data) => {
        const isChina = data.country === 'CN'
        setIsChina(isChina)
      })
  }, []);

  const Positions = positions.map(position => 
    <Marker key={position.name} position={[position.lat,position.lng]} icon={logoIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  )

  const Map = isChina ? <BingLayer  bingkey={BING_KEY} type="AerialWithLabels"/> : <ReactLeafletGoogleLayer apiKey={key} type={'hybrid'} />

  return (
    <div className="App">
      <div className="Map">
        <MapContainer center={[positions[0].lat,positions[0].lng]} zoom={3} scrollWheelZoom={true}>
          { Map }
          { Positions }
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
