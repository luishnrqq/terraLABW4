import { Map, View } from "ol";
import XYZ from "ol/source/XYZ";
import React, { useEffect, useState, useRef } from 'react';
import { Menu } from "./components/Menu";
import TileLayer from "ol/layer/Tile";
import './Map/Map.css';
import { MapProvider } from './MapContext';


const geojsonObject = {}; // see full geojson object in Github
const geojsonObject2 = {}; // see full geojson object in Github




const App = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [direction, setDirection] = useState({});


  useEffect(() => {
    const initialMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          className: "tilelayer",
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          }),
        })
      ],
      view: new View({
        projection: 'EPSG:3857',
        center: [-43.50994172644795, -20.395580231739956],
        zoom: 10,
      }),
      controls: [],

    });
    setMap(initialMap);

  }, []);


  return (
    <div ref={mapRef} className='ol-map'>
      {map && <MapProvider map={map}>
       <Menu/>
      </MapProvider>}
    </div>
  );
}
export default App;