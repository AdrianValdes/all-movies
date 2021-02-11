import React, { createContext, useContext, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { animationUrl, comediesUrl, popularUrl } from '../../urls';

const MoviesContext = createContext();
export const useMovies = () => useContext(MoviesContext);

export const MoviesProvider = ({ children }) => {
  const [comedies, setComedies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [animation, setAnimation] = useState([]);

  const { loading: loadingComedies, error: errorComedies } = useFetch({
    url: comediesUrl,
    setMovies: setComedies,
  });

  const { loading: loadingPopularity, error: errorPopularity } = useFetch({
    url: popularUrl,
    setMovies: setPopular,
  });

  const { loading: loadingAnimation, error: errorAnimation } = useFetch({
    url: animationUrl,
    setMovies: setAnimation,
  });

  return (
    <MoviesContext.Provider value={{ comedies, popular, animation }}>
      {children}
    </MoviesContext.Provider>
  );
};
