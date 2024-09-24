import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Get all shipping addresses on an order using the `order_id`. Returned in the response is `shipping_quotes` object. Please use the "Get Shipping Quotes" Endpoint. Using the response will return a 204 for the shipping quote.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3Mzk-get-order-shipping-addresses
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id, limit, page } = req.query;

		let endpoint = `/v2/orders/${order_id}/shipping_addresses`;

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
