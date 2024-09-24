import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Gets all order taxes using `order_id`. Each tax applied to an order. This information can be useful for reporting purposes. Pass in the query parameter `?details=true` to return extra details about order taxes. `order_product_id` and `line_item_type` are also returned.. All values are read-only.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3NDI-get-all-order-taxes
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id, details, limit, page } = req.query;

		let endpoint = `/v2/orders/${order_id}/taxes`;

		// To return detailed tax information, pass in the details query.
		details ? (endpoint += endpoint.includes("?") ? `&details=${details}` : `?details=${details}`) : undefined;

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
