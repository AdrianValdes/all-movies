import React, { createContext, useContext, useEffect, useState } from 'react';

const MoviesContext = createContext();
export const useMovies = () => useContext(MoviesContext);

const KEY = process.env.REACT_APP_KEY;

const genres =
  'https://api.themoviedb.org/3/genre/movie/list?api_key=009f9976a57d0b92e9dee06122c5b4bc&language=en-US';

export const MoviesProvider = ({ children }) => {
  const [comedies, setComedies] = useState([]);


  useEffect(() => {
    async function fetchComedies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=35&page=1`
      );
      const { results } = await response.json();
      setComedies((prevState) => [...prevState, ...results]);
    }

    fetchComedies();
  }, []);

  return (
    <MoviesContext.Provider value={{ comedies }}>
      {children}
    </MoviesContext.Provider>
  );
};
