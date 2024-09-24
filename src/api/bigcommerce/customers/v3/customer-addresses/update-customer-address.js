import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Updates a Customer Address. Multiple customer addresses can be updated in one call.
 * @source https://developer.bigcommerce.com/api-reference/ce1691ad00419-update-a-customer-address
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		let endpoint = `/v3/customers/addresses`;

		const result = await BigCommerce.put(endpoint, req.body);

		res.json(result);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
