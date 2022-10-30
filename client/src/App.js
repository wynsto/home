import './App.css';
import personPin from './person_pin_white_24dp.svg'
import locationPin from './location_pin_white_24dp.svg'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import React, { useState, useEffect } from 'react';
import { Icon } from "leaflet";
import { BingLayer } from 'react-leaflet-bing-v2'

import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';

const persionIcon = new Icon({
  iconUrl: personPin,
  iconSize: [50, 50],
  iconAnchor: [25, 50]
});

const locationIcon = new Icon({
  iconUrl: locationPin,
  iconSize: [50, 50],
  iconAnchor: [25, 50]
});

function App() {

  const GOOGLE_KEY = "AIzaSyDp9HNrVKgfwjPqj5Mz6x8jS7t-_u2MoBI";
  const BING_KEY = 'Am7D2syhNLibITjOzf1yxOwVeqr9juVysjL1M5J9q1igpLtOkqP8Oo1kvSawlNcM'

  const [positions, setPosition] = useState([{lat: 22.302711, lng: 114.177216, name: 'Hong Kong'}]);
  const [isChina, setIsChina] = useState(false);
  const [userLoc, setUserLoc] = useState([]);
  useEffect(() => {
    fetch('https://home.houyewei.com/positions')
      .then((response) => response.json())
      .then((data) => {
        setPosition(data.positions)
      });
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=9c1d4f19a5a24c81a8f645f3cb6704db')
      .then((response) => response.json())
      .then((data) => {
        const isChina = data.country_code2 === 'CN'
        const loc = [data.latitude, data.longitude]
        setUserLoc(loc)
        setIsChina(isChina)
      })
  }, []);

  const Positions = positions.map(position => 
    <Marker key={position.name} position={[position.lat,position.lng]} icon={locationIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  )

  const UserLocation = userLoc.length ? (
    <Marker position={userLoc} icon={persionIcon}>
      <Popup>
        Your location
      </Popup>
    </Marker>
  ) : ""

  const Map = isChina ? <BingLayer  bingkey={BING_KEY} type="AerialWithLabels"/> : <ReactLeafletGoogleLayer apiKey={GOOGLE_KEY} type={'hybrid'} />

  return (
    <div className="App">
      <div className="Map">
        <MapContainer center={[positions[0].lat,positions[0].lng]} zoom={4} scrollWheelZoom={true}>
          { Map }
          { Positions }
          { UserLocation }
        </MapContainer>

      </div>
    </div>
  );
}

export default App;
