import { useMainSWRConfig } from "./useMainSWRConfig";
import Request from "../libs/request";

/**
 * @description SWR hook for generating login URL
 * @returns {Object} The login URL
 */
export const getLoginUrl = (customer_id) => {
	const {
		data: loginUrl,
		error: loginUrlError,
		isValidating: isLoginUrlValidating
	} = useMainSWRConfig(`/api/bigcommerce/login/get-login-token$customer_id=${customer_id}`);

	return {
		loginUrl,
		loginUrlError,
		isLoginUrlValidating
	};
};

/**
 * @description SWR hook for handling login data
 * @param {string} email
 * @param {string} password
 * @returns {Object} The login data
 */

const fetcher = async (endpoint, method, body = {}) => {
	const response = await Request({ endpoint, method, body });
	return response;
};

export const useLogin = async ({ email, password, remember }) => {

	// get all custommers that is same with current email
	let endpoint = `/api/bigcommerce/customers/v3/customers/get-all-customers?emailIn=${email}`
	const response = await fetcher(endpoint, "GET")  

	console.log(response)
	if (response.status == 200) {
		const customerList = response.data;
		console.log(customerList)

		if (customerList.length != 0) {
			const customerData = customerList[0];
			const customerId = customerData.id;

			// validate password

			endpoint = `/api/bigcommerce/customers/v2/customer-passwords/validate-password?customer_id=${customerId}`
			const response = await fetcher(endpoint, "POST", { password })

			// endpoint = `/api/bigcommerce/login/get-login-token?customer_id=${customerId}`
			// const response = await fetcher(endpoint, "GET")

			console.log(response)

			if (response.status == 200 && response.data.success) {
				console.log('congratue!')

				//getting login URL with token 
				endpoint = `/api/bigcommerce/login/get-login-token?customer_id=${customerId}`
				const response = await fetcher(endpoint, "GET")

				if (response.status == 200 && response.data.success)
					return true;
				else
					return false
			}
			else {
				console.log('falsed')
				return false;
			}
		} else {
			return false;
		}
	} else {
		return false;
	}
};

/**
 * @description SWR hook for handling logout data
 * @returns {Object} The logout data
 */
export const useLogout = async () => {
	navigate('/login?action=logout');
};

/**
 * @description SWR hook for handling register data
 * @param {Object} customer
 * @returns
 */
export const useRegister = async (customer) => {
	let endpoint = `/api/bigcommerce/customers/v3/customers/create-customers`
	const response = await fetcher(endpoint, "POST", customer)

	console.log(response)
	if (response.status == 200) {
		return response.data.data[0];
	} else {
		return false;
	}

};
