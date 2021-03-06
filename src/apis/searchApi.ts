import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token: "pk.eyJ1IjoiY2FybG9zYmV0YW4iLCJhIjoiY2pwMzA2YTNvMDBpODNwcDlpOW0zOXdiMyJ9.qDBc1LRUYMIzklfjiImRWw",
  },
});

export default searchApi;
