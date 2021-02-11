import React, { createContext, useContext, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { animationUrl, comediesUrl, popularUrl } from '../../urls';

const MoviesContext = createContext();
export const useMovies = () => useContext(MoviesContext);

export const MoviesProvider = ({ children }) => {
  const [comedies, setComedies] = useState([]);
  const [comediesError, setComediesError] = useState(null);
  const [comediesStatus, setComediesStatus] = useState('loading');

  const [popular, setPopular] = useState([]);
  const [popularError, setPopularError] = useState(null);
  const [popularStatus, setPopularStatus] = useState('loading');

  const [animation, setAnimation] = useState([]);
  const [animationError, setAnimationError] = useState(null);
  const [animationStatus, setAnimationStatus] = useState('loading');

  useFetch({
    url: comediesUrl,
    setMovies: setComedies,
    setMoviesStatus: setComediesStatus,
    setMoviesError: setComediesError,
  });

  useFetch({
    url: popularUrl,
    setMovies: setPopular,
    setMoviesStatus: setPopularStatus,
    setMoviesError: setPopularError,
  });

  useFetch({
    url: animationUrl,
    setMovies: setAnimation,
    setMoviesError: setAnimationError,
    setMoviesStatus: setAnimationStatus,
  });

  return (
    <MoviesContext.Provider
      value={{
        comedies,
        comediesError,
        popular,
        popularError,
        animation,
        animationError,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
