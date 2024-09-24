import axios from "axios";
import {
	OPTIMIZELY_API_ACCEPT_HEADER,
	OPTIMIZELY_API_HOSTNAME,
	OPTIMIZELY_API_REQUEST_HEADERS,
	OPTIMIZELY_API_TIMEOUT
} from "../constants/optimizely";
import { convertStringToLowercase } from "../utils/convertValues";

/**
 * @description Optimizely lib function
 * @param {string} endpoint
 * @param {string} method
 * @param {Object} body
 * @param {Object} options
 * @returns {Promise} Promise object represents the result of the request
 */
const Optimizely = async ({ endpoint = null, method = null, body = {}, options = {} }) => {
	const convertedMethod = convertStringToLowercase(method);

	// Custom `axios` instance
	const OptimizelyAxiosInstance = axios.create({
		baseURL: OPTIMIZELY_API_HOSTNAME,
		withCredentials: true,
		timeout: OPTIMIZELY_API_TIMEOUT,
		headers: {
			...OPTIMIZELY_API_REQUEST_HEADERS
		},
		...options
	});

	// Override default `axios` instance
	axios.defaults.headers.common["Accept"] = OPTIMIZELY_API_ACCEPT_HEADER;
	axios.defaults.headers.common["Content-Type"] = OPTIMIZELY_API_ACCEPT_HEADER;

	// Use `axios` interceptors for all HTTP methods (GET, POST, PUT, DELETE, etc.)
	OptimizelyAxiosInstance.interceptors.request.use(
		(req) => Promise.resolve(req),
		(err) => Promise.reject(err)
	);

	// Use `axios` interceptors for all HTTP methods (GET, POST, PUT, DELETE, etc.)
	OptimizelyAxiosInstance.interceptors.response.use(
		(res) => Promise.resolve(res),
		(err) => Promise.reject(err)
	);

	// Handle `GET` request
	const getMethod = async (endpoint) => {
		if (endpoint === null) throw new Error("Endpoint is required to make a GET request.");

		console.info(`\n----- NEW OPTIMIZELY GET REQUEST: ${endpoint} -----\n`);

		const response = await OptimizelyAxiosInstance.get(endpoint);
		return response;
	};

	// Handle `POST` request
	const postMethod = async (endpoint, body) => {
		if (endpoint === null || body === null) throw new Error("Endpoint and body are required to make a POST request.");

		console.info(`\n----- NEW OPTIMIZELY POST REQUEST: ${endpoint} -----\n`);

		const response = await OptimizelyAxiosInstance.post(endpoint, body);
		return response;
	};

	// Handle `PUT` request
	const putMethod = async (endpoint, body) => {
		if (endpoint === null || body === null) throw new Error("Endpoint and data are required to make a PUT request.");

		console.info(`\n----- NEW OPTIMIZELY PUT REQUEST: ${endpoint} -----\n`);

		const response = await OptimizelyAxiosInstance.put(endpoint, body);
		return response;
	};

	// Handle DELETE request
	const deleteMethod = async (endpoint) => {
		if (endpoint === null) throw new Error("Endpoint is required to make a DELETE request.");

		console.info(`\n----- NEW OPTIMIZELY DELETE REQUEST: ${endpoint} -----\n`);

		const response = await OptimizelyAxiosInstance.delete(endpoint);
		return response;
	};

	switch (convertedMethod) {
		case "get":
			return getMethod(convertStringToLowercase(endpoint));
		case "post":
			return postMethod(convertStringToLowercase(endpoint), body);
		case "put":
			return putMethod(convertStringToLowercase(endpoint), body);
		case "delete":
			return deleteMethod(convertStringToLowercase(endpoint));
		default:
			console.error(`\n----- OPTIMIZELY REQUEST ERROR: Invalid method: ${method} -----\n`);
			break;
	}
};

export default Optimizely;
