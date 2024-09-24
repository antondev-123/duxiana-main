import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Creates a Customer Address. Multiple customer addresses can be created in one call.
 * @source https://developer.bigcommerce.com/api-reference/a07ae13d3bc9f-create-a-customer-address
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		let endpoint = `/v3/customers/addresses`;

		const result = await BigCommerce.post(endpoint, req.body);

		res.json(result);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
