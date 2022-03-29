import { ChangeEvent, useRef, useContext } from "react";
import { PlacesContext } from "../context/places/PlacesContext";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout>();
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value);
    }, 350);
  };

  return (
    <div className='search-container'>
      <input type='text' className='form-control' placeholder='Buscar lugar....' onChange={onQueryChange} />

      <SearchResults />
    </div>
  );
};

export default SearchBar;
