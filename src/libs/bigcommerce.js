import axios from "axios";
import {
	BIGCOMMERCE_API_ACCEPT_HEADER,
	BIGCOMMERCE_API_CORS_HEADERS,
	BIGCOMMERCE_API_REQUEST_HEADERS,
	BIGCOMMERCE_API_STORE_URL,
	BIGCOMMERCE_API_TIMEOUT
} from "../constants/bigcommerce";
import { convertStringToLowercase } from "../utils/convertValues";

/**
 * @description Bigcommerce lib function
 * @param {string} endpoint
 * @param {string} method
 * @param {Object} body
 * @param {Object} options
 * @returns {Promise} Promise object represents the result of the request
 */
const BigCommerce = async ({ endpoint = null, method = null, body = {}, options = {} }) => {
	const convertedMethod = convertStringToLowercase(method);

	// Custom `axios` instance
	const BigCommerceAxiosInstance = axios.create({
		baseURL: BIGCOMMERCE_API_STORE_URL,
		withCredentials: true,
		timeout: BIGCOMMERCE_API_TIMEOUT,
		headers: {
			...BIGCOMMERCE_API_REQUEST_HEADERS,
			...BIGCOMMERCE_API_CORS_HEADERS
		},
		...options
	});

	// Override default `axios` instance
	axios.defaults.headers.common["Accept"] = BIGCOMMERCE_API_ACCEPT_HEADER;
	axios.defaults.headers.common["Content-Type"] = BIGCOMMERCE_API_ACCEPT_HEADER;

	// Use `axios` interceptors for all HTTP methods (GET, POST, PUT, DELETE, etc.)
	BigCommerceAxiosInstance.interceptors.request.use(
		(req) => Promise.resolve(req),
		(err) => Promise.reject(err)
	);

	// Use `axios` interceptors for all HTTP methods (GET, POST, PUT, DELETE, etc.)
	BigCommerceAxiosInstance.interceptors.response.use(
		(res) => Promise.resolve(res),
		(err) => Promise.reject(err)
	);

	// Handle `GET` request
	const getMethod = async (endpoint) => {
		if (endpoint === null) throw new Error("Endpoint is required to make a GET request.");

		console.info(`\n----- NEW BIGCOMMERCE GET REQUEST: ${endpoint} -----\n`);

		const response = await BigCommerceAxiosInstance.get(endpoint);
		return response;
	};

	// Handle `POST` request
	const postMethod = async (endpoint, body) => {
		if (endpoint === null || body === null) throw new Error("Endpoint and body are required to make a POST request.");

		console.info(`\n----- NEW BIGCOMMERCE POST REQUEST: ${endpoint} -----\n`);

		const response = await BigCommerceAxiosInstance.post(endpoint, body);
		return response;
	};

	// Handle `PUT` request
	const putMethod = async (endpoint, body) => {
		if (endpoint === null || body === null) throw new Error("Endpoint and data are required to make a PUT request.");

		console.info(`\n----- NEW BIGCOMMERCE PUT REQUEST: ${endpoint} -----\n`);

		const response = await BigCommerceAxiosInstance.put(endpoint, body);
		return response;
	};

	// Handle DELETE request
	const deleteMethod = async (endpoint) => {
		if (endpoint === null) throw new Error("Endpoint is required to make a DELETE request.");

		console.info(`\n----- NEW BIGCOMMERCE DELETE REQUEST: ${endpoint} -----\n`);

		const response = await BigCommerceAxiosInstance.delete(endpoint);
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
			console.error(`\n----- BIGCOMMERCE REQUEST ERROR: Invalid method: ${method} -----\n`);
			break;
	}
};

export default BigCommerce;
