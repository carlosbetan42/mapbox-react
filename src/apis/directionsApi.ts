import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    steps: false,
    geometries: "geojson",
    overview: "simplified",
    language: "es",
    access_token: "pk.eyJ1IjoiY2FybG9zYmV0YW4iLCJhIjoiY2pwMzA2YTNvMDBpODNwcDlpOW0zOXdiMyJ9.qDBc1LRUYMIzklfjiImRWw",
  },
});

export default directionsApi;
