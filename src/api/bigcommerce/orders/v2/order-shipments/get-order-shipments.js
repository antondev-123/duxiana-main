import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Gets a list of all shipments on an order.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3NDM-get-order-shipments
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id, limit, page } = req.query;

		let endpoint = `/v2/orders/${order_id}/shipments`;

		// Number of results to return
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// The page to return in the response
		page ? (endpoint += endpoint.includes("?") ? `&page=${page}` : `?page=${page}`) : undefined;

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
