import { useState, useEffect } from 'react';

const useHackerNewsApi = () => {
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useHackerNewsApi;
