import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [dataApi, setData] = useState({});
  const [errorApi, setError] = useState(null);
  const [loadingApi, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!url) return;
    async function fetchMovies() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);

        if (result.total_pages && result.page) {
          if (result.total_pages === result.page) {
            setHasMore(false);
          }
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchMovies();
  }, [url]);

  return { dataApi, errorApi, loadingApi, hasMore };
};
