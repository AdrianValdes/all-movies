import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useFetch } from '../../hooks/useFetch';

const MoviesContext = createContext();
export const useMovies = () => useContext(MoviesContext);

const KEY = process.env.REACT_APP_KEY;
const popularity =
  'https://api.themoviedb.org/3/discover/movie?api_key=009f9976a57d0b92e9dee06122c5b4bc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

const genres =
  'https://api.themoviedb.org/3/genre/movie/list?api_key=009f9976a57d0b92e9dee06122c5b4bc&language=en-US';

export const MoviesProvider = ({ children }) => {
  const [comedies, setComedies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [animation, setAnimation] = useState([]);

  const { loading: loadingComedies, error: errorComedies } = useFetch({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=35&page=1`,
    setMovies: setComedies,
  });

  const { loading: loadingPopularity, error: errorPopularity } = useFetch({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    setMovies: setPopular,
  });

  const { loading: loadingAnimation, error: errorAnimation } = useFetch({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=16&page=1`,
    setMovies: setAnimation,
  });

  return (
    <MoviesContext.Provider value={{ comedies, popular, animation }}>
      {children}
    </MoviesContext.Provider>
  );
};
