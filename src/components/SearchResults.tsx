import { useContext, useState } from "react";
import { PlacesContext } from "../context/places/PlacesContext";
import LoadingPlaces from "./LoadingPlaces";
import { Feature } from "../interfaces/places";
import { MapContext } from "../context/map/MapContext";

const SearchResults = () => {
  const [activeId, setActiveId] = useState("");
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);

  const onPlaceClick = (place: Feature) => {
    const [lng, lat] = place.center;
    setActiveId(place.id);

    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;

    const [lng, lat] = place.center;
    getRouteBetweenPoints(userLocation, [lng, lat]);
  };

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <div style={{ overflowY: "scroll", maxHeight: "85vh" }}>
      <ul className='list-group-mt-3 p-0 pt-1'>
        {places.map((place) => (
          <li
            key={place.id}
            className={`list-group-item list-group-item-action pointer ${activeId === place.id ? "active" : ""}`}
            onClick={() => onPlaceClick(place)}
          >
            <h6>{place.text_es}</h6>
            <p className='' style={{ fontSize: "12px" }}>
              {place.place_name_es}
            </p>
            <button
              onClick={() => getRoute(place)}
              className={`btn btn-sm ${activeId === place.id ? "btn-outline-light" : "btn-outline-primary"}`}
            >
              Direcciones
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
