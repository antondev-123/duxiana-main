import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Lists all order coupons. Optional parameters can be passed in.
 * 0 - `per_item_discount`
 * 1 - `percentage_discount`
 * 2 - `per_total_discount`
 * 3 - `shipping_discount`
 * 4 - `free_shipping`
 * 5 - `promotion`
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3Mzc-list-order-coupons
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id, limit, page } = req.query;

		let endpoint = `/v2/orders/${order_id}/coupons`;

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
