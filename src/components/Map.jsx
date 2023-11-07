import React, { useEffect } from "react";
import { Map, View } from "ol";
import { OSM, Vector as VectorSource } from "ol/source";
import { Point } from "ol/geom";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import Feature from "ol/Feature";
import Geolocation from "ol/Geolocation";
import { useGeographic } from "ol/proj";

// eslint-disable-next-line react-hooks/rules-of-hooks
useGeographic();

const places = [
  [77.1025, 28.7041],
  [72.8777, 19.076],
  [78.4867, 17.385],
];

const features = places.map((place) => new Feature(new Point(place)));

function MapComponent() {
  useEffect(() => {
    const mapTarget = document.getElementById("map");

    const geolocation = new Geolocation({
      tracking: true,
      trackingOptions: {
        enableHighAccuracy: true,
      },
    });

    geolocation.on("change:position", () => {
      const coordinates = geolocation.getPosition();
      if (coordinates) {
        map.getView().setCenter(coordinates);
      }
    });

    const map = new Map({
      target: mapTarget,
      view: new View({
        center: [75, 30],
        zoom: 12,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: features,
          }),
          style: {
            "circle-radius": 5,
            "circle-fill-color": "red",
          },
        }),
      ],
    });

    return () => {
      map.setTarget(null);
      map.dispose();
    };
  }, []);

  return (
    <div>
      <div id="map"></div>
    </div>
  );
}

export default MapComponent;
