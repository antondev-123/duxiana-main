import useSWR from "swr";
import { ON_ERROR_RETRY_COUNT, REVALIDATION_INTERVAL } from "../constants/global";
import Request from "../libs/request";

/**
 * @description The main SWR hook that will handle all the data fetching, error reporting, and revalidation.
 * @param {string} endpoint
 * @returns {Object} Object that contains the data, error, and revalidate functions.
 */
export const useMainSWRConfig = (endpoint = null) => {
	// Default options
	const defaultOptions = {
		errorRetryCount: ON_ERROR_RETRY_COUNT,
		onSuccess: (data, key) => {},
		onError: (err, key) => {
			if (err) {
				const { status } = err;

				if (status !== 403) {
					return;
				}

				return Promise.reject(err);
			}
		},
		onErrorRetry: (err, key, config, revalidate, { retryCount }) => {
			if (err) {
				const { status } = err;

				// Never retry on 404/403.
				if (status === 404 || status === 403) return;
			}

			// Only retry up to 5 times.
			if (retryCount >= ON_ERROR_RETRY_COUNT) return;

			// Retry after 1.5 seconds.
			setTimeout(() => revalidate({ retryCount }), REVALIDATION_INTERVAL);
		}
	};

	// Fetcher
	const fetcher = async (endpoint) => {
		const response = await Request({ endpoint, method: "GET" });
		return response;
	};

	// SWR hook for global mutations
	const { data, error, isValidating } = useSWR(endpoint, fetcher, {
		...defaultOptions
	});

	return { data, error, isValidating };
};
