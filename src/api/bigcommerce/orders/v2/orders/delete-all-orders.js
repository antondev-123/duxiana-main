import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Archives all orders.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3MzY-delete-all-orders
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		let endpoint = `/v2/orders/`;

		const result = await BigCommerce({
			endpoint,
			method: "delete"
		});

		res.json(result.data.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
