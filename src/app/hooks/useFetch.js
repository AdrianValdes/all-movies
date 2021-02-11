import { useEffect } from 'react';

export const useFetch = ({
  url,
  setMovies,
  setMoviesStatus,
  setMoviesError,
}) => {
  useEffect(() => {
    if (!url) return;
    async function fetchMovies() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies([...data.results]);
        setMoviesStatus('finished');
      } catch (error) {
        setMoviesError(error.message);
        setMoviesStatus('finished');
      }
    }
    fetchMovies();
  }, [url]);

  return {};
};
