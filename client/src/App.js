import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  return (
    <div className="App">
      <div className="Map">
        <MapContainer center={[22.302711, 114.177216]} zoom={10} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[22.302711, 114.177216]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
