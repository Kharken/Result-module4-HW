export interface Data {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export type LoadingError = Error | null;

export interface RefetchParams {
  params: {
    _limit: number;
  };
}

type Refetch = (params: RefetchParams) => Promise<void>;

export interface FetchResult {
  data: Data[];
  error: LoadingError;
  isLoading: boolean;
  refetch: Refetch;
}
