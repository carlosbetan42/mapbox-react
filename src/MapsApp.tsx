import { MapProvider } from "./context";
import { PlacesProvider } from "./context/places/PlacesProvider";
import HomeScreen from "./screens/HomeScreen";
import "./styles.css";

const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};

export default MapsApp;
