import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Gets an array of orders in the store organized by order status.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3MzM-get-a-count-of-orders
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		let endpoint = `/v2/orders/count`;

		const result = await BigCommerce({
			endpoint,
			method: "get"
		});

		res.json(result.data.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
