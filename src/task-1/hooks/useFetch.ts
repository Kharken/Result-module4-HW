import { useEffect, useState } from 'react';
import { Data, FetchResult, LoadingError, RefetchParams } from '../types/types';

export const useFetch = (baseUrl: string): FetchResult => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState<LoadingError>(null);

  const emptyParams: RefetchParams = {
    params: {
      _limit: -1,
    },
  };

  const buildUrl = (params: RefetchParams): string => {
    const url = new URL(baseUrl);
    const searchParams = new URLSearchParams();

    searchParams.append('_limit', params.params._limit.toString());

    url.search = searchParams.toString();
    return url.toString();
  };

  const refetch = async (params: RefetchParams) => {
    try {
      const url = buildUrl(params);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
      setError(null);
    }
  };

  useEffect(() => {
    void refetch(emptyParams);
  }, []);

  return { isLoading, data, error, refetch };
};
