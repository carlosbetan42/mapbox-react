import React from "react";
import ReactDOM from "react-dom";
import MapsApp from "./MapsApp";

/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiY2FybG9zYmV0YW4iLCJhIjoiY2pwMzA2YTNvMDBpODNwcDlpOW0zOXdiMyJ9.qDBc1LRUYMIzklfjiImRWw";

if (!navigator.geolocation) {
  alert("Tu navegador no tiene opción de Geolocation");
  throw new Error("Tu navegador no tiene opción de Geolocation");
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById("root")
);
