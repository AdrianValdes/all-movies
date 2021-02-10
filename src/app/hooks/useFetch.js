import { useEffect, useState } from 'react';

export const useFetch = ({ url, setMovies }) => {
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    async function fetchComedies() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies([...data.results]);
        setLoading(false);
      } catch (error) {
        setApiError(error);
        setLoading(false);
      }
    }
    fetchComedies();
  }, [url]);

  return {
    loading,
    apiError,
  };
};
