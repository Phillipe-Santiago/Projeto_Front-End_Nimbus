/* import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './mapa.css';
import { Icon } from 'leaflet';

const center = [-22.994841333340094, -43.32459988596175]

const markers = [
    {
    geocode: [-22.967840087200422, -43.18297403633863],
    info: "Copacabana",
    },
    {
    geocode: [-23.01221940541354, -43.3079565626253],
    info: "Jardim Oceânico",
    },
    {
    geocode: [-23.01393952265379, -43.45112774159444],
    info: "Recreio dos Bandeirantes",
    },
    {
    geocode: [-22.92912195894094, -43.2507853920363],
    info: "Tijuca",
    },
];

const customIcon = new Icon ({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149059.png',
    iconSize: [38,38]
})

function Mapa({ onMarkerClick }) {
    const handleMarkerClick = (markerInfo) => {
        if (onMarkerClick) {
            onMarkerClick(markerInfo);
        }
  };

  return (
    <div id='mapa'>
      <MapContainer center={center} zoom={10} style={{ width: '100%', height: '45vh'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
        />

        {markers.map((marker) => (
          <Marker key={marker.info} position={marker.geocode} icon={customIcon} eventHandlers={{ click: () => handleMarkerClick(marker.info) }}>
            <Popup>{marker.info}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Mapa; */

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './mapa.css';
import { Icon } from 'leaflet';

const center = [-22.994841333340094, -43.32459988596175];

const markers = [
  {
    geocode: [-22.967840087200422, -43.18297403633863],
    info: "Copacabana",
  },
  {
    geocode: [-23.01221940541354, -43.3079565626253],
    info: "Jardim Oceânico",
  },
  {
    geocode: [-23.01393952265379, -43.45112774159444],
    info: "Recreio dos Bandeirantes",
  },
  {
    geocode: [-22.92912195894094, -43.2507853920363],
    info: "Tijuca",
  },
];

const defaultIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/10542/10542406.png',
  iconSize: [38, 38],
});

const selectedIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/727/727606.png',
  iconSize: [38, 38],
});

function Mapa({ onMarkerClick }) {
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);

  const handleMarkerClick = (marker, index) => {
    setSelectedMarkerIndex(index);
    if (onMarkerClick) {
      onMarkerClick(marker.info);
    }
  };

  return (
    <div id='mapa'>
      <MapContainer center={center} zoom={10} style={{ width: '100%', height: '41vh' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
        />

        {markers.map((marker, index) => (
          <Marker
            key={marker.info}
            position={marker.geocode}
            icon={selectedMarkerIndex === index ? selectedIcon : defaultIcon}
            eventHandlers={{ click: () => handleMarkerClick(marker, index) }}
          >

          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Mapa;
