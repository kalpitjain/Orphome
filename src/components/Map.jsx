import React, { useEffect, useState } from "react";
import { Map, View } from "ol";
import { OSM, Vector as VectorSource } from "ol/source";
import { Point } from "ol/geom";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import Feature from "ol/Feature";
import Geolocation from "ol/Geolocation";
import Overlay from "ol/Overlay";
import { useGeographic } from "ol/proj";
import orphome from "./orphome";

// eslint-disable-next-line react-hooks/rules-of-hooks
useGeographic();

const features = orphome.map(({ coordinates, url, name, phone }) => {
  const feature = new Feature(new Point(coordinates));
  feature.set("url", url);
  feature.set("name", name);
  feature.set("phone", phone);
  return feature;
});

function MapComponent() {
  const [hover, setHover] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleWebsiteClick = () => {
    const websiteUrl = hover.get("url");
    if (websiteUrl) {
      window.open(websiteUrl, "_blank");
    }
  };

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

    const overlay = new Overlay({
      element: document.createElement("div"),
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });

    map.addOverlay(overlay);

    map.on("pointermove", (event) => {
      const feature = map.forEachFeatureAtPixel(
        event.pixel,
        (feature) => feature
      );
      if (feature) {
        setHover(feature);
        const coordinates = feature.getGeometry().getCoordinates();
        setMousePosition({ x: event.pixel[0], y: event.pixel[1] });
        overlay.getElement().innerHTML = `Coordinates: ${coordinates}`;
        overlay.setPosition(coordinates);
      } else {
        setHover(null);
        overlay.setPosition(undefined);
      }
    });

    return () => {
      map.setTarget(null);
      map.dispose();
    };
  }, []);

  return (
    <div>
      <div id="map"></div>
      {hover && (
        <div
          className="hover-box"
          style={{
            top: mousePosition.y,
            left: mousePosition.x,
          }}
        >
          <div className="hoverbox-content" onClick={handleWebsiteClick}>
            <h6 className="orphanage-name">{hover.get("name")}</h6>
            <h6 className="orphanage-number">{hover.get("phone")}</h6>
            <hr />
            <div className="preview-container">
              <iframe
                title="Website Preview"
                src={hover.get("url")}
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MapComponent;
