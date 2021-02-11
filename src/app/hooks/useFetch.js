import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [dataApi, setData] = useState({});
  const [errorApi, setError] = useState(null);
  const [loadingApi, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    async function fetchMovies() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchMovies();
  }, [url]);

  return { dataApi, errorApi, loadingApi };
};
