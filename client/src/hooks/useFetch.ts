import { useEffect, useState, useRef, useMemo } from "react";
import { useAuth0 } from "@auth0/auth0-react";

type HookOptions = {
  skipFirstRun?: boolean;
  fetchWithAuth?: boolean;
};

const useFetch = (
  url: string,
  options: RequestInit = {},
  hookOptions?: HookOptions
) => {
  const _hookOptions: HookOptions = useMemo(
    () => ({
      skipFirstRun: false,
      fetchWithAuth: true,
      ...hookOptions,
    }),
    [hookOptions]
  );
  const { getAccessTokenSilently } = useAuth0();
  const skip = useRef(_hookOptions.skipFirstRun);
  const [state, setState] = useState({
    error: null,
    loading: true,
    data: null,
  });
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    (async () => {
      if (skip.current) {
        skip.current = false;
        return;
      }

      try {
        const { ...fetchOptions } = options;
        let headers = { ...fetchOptions.headers };

        if (_hookOptions.fetchWithAuth) {
          const accessToken = await getAccessTokenSilently({
            audience: process.env.REACT_APP_AUTH_AUDIENCE,
          });

          headers = { ...headers, Authorization: `Bearer ${accessToken}` };
        }

        const res = await fetch(url, {
          ...fetchOptions,
          headers,
        });
        const resData = await res.json();

        setState((state) => ({
          ...state,
          data: resData,
          error: null,
          loading: false,
        }));
      } catch (error) {
        setState((state) => ({
          ...state,
          error,
          loading: false,
        }));
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshIndex]);

  return {
    ...state,
    refetch: () => setRefreshIndex(refreshIndex + 1),
  };
};

export default useFetch;
