import axios from "axios";
import "isomorphic-fetch";
import { SITE_URL } from "../constants/global";
import { REQUEST_ACCEPT_HEADER, REQUEST_HEADERS, REQUEST_TIMEOUT } from "../constants/request";
import { convertStringToLowercase } from "../utils/convertValues";

/**
 * @description Request lib function
 * @param {string} endpoint
 * @param {string} method
 * @param {Object} body
 * @param {Object} options
 * @returns {Promise} Promise object represents the result of the request
 */
const Request = async ({ endpoint = null, method = null, body = {}, options = {} }) => {
	const convertedMethod = convertStringToLowercase(method);

	// Custom `axios` instance
	const RequestAxiosInstance = axios.create({
		baseURL: SITE_URL,
		withCredentials: true,
		timeout: REQUEST_TIMEOUT,
		headers: {
			...REQUEST_HEADERS
		},
		...options
	});

	// Override default `axios` instance
	axios.defaults.headers.common["Accept"] = REQUEST_ACCEPT_HEADER;
	axios.defaults.headers.common["Content-Type"] = REQUEST_ACCEPT_HEADER;

	// Use `axios` interceptors for all HTTP methods (GET, POST, PUT, DELETE, etc.)
	RequestAxiosInstance.interceptors.request.use(
		(req) => Promise.resolve(req),
		(err) => Promise.reject(err)
	);

	// Use `axios` interceptors for all HTTP methods (GET, POST, PUT, DELETE, etc.)
	RequestAxiosInstance.interceptors.response.use(
		(res) => Promise.resolve(res),
		(err) => Promise.reject(err)
	);

	// Handle `GET` request
	const getMethod = async (endpoint) => {
		if (endpoint === null) throw new Error("Endpoint is required to make a GET request.");

		const response = await RequestAxiosInstance.get(endpoint);
		return response;
	};

	// Handle `POST` request
	const postMethod = async (endpoint, body) => {
		if (endpoint === null || body === null) throw new Error("Endpoint and body are required to make a POST request.");

		const response = await RequestAxiosInstance.post(endpoint, body);
		return response;
	};

	// Handle `PUT` request
	const putMethod = async (endpoint, body) => {
		if (endpoint === null || body === null) throw new Error("Endpoint and data are required to make a PUT request.");

		const response = await RequestAxiosInstance.put(endpoint, body);
		return response;
	};

	// Handle DELETE request
	const deleteMethod = async (endpoint) => {
		if (endpoint === null) throw new Error("Endpoint is required to make a DELETE request.");

		const response = await RequestAxiosInstance.delete(endpoint);
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
			console.error(`\n----- REQUEST ERROR: Invalid method: ${method} -----\n`);
			break;
	}
};

export default Request;
