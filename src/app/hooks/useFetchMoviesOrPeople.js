import { useEffect, useState } from 'react';

export const useFetchMoviesOrPeople = (comingUrl, genreUrl, pageNumber) => {
  const [dataApi, setData] = useState([]);
  const [errorApi, setError] = useState(null);
  const [loadingApi, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  if (comingUrl !== genreUrl) {
    setData([]);
  }
  const url = `${genreUrl}&page=${pageNumber}`;
  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        const newResult = [...dataApi, ...result.results];
        setData(newResult);
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
    fetchData();
  }, [url]);

  return { dataApi, errorApi, loadingApi, hasMore };
};
