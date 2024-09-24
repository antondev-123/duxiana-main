import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Returns a list of refunds ordered by refund ID in ascending order.
 * Requires at least one of the following scopes: `store_v2_transactions_read_only`,
 * `store_v2_transactions`, `store_v2_orders_read_only`, `store_v2_orders`
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ4Mjk-get-all-refunds
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { createdMax, createdMin, idIn, limit, order_idIn, page } = req.query;

		let endpoint = `/v3/orders/payment_actions/refunds`;

		// Filter results so they are earlier than or equal to provided date. Must be in url-encoded RFC 3339 format. e.g. `2020-01-15T01:02:34-01:00` is RFC 3339 format. Url-encoded this will be `2020-01-15T01%3A02%3A34%2B01%3A00`
		createdMax
			? (endpoint += endpoint.includes("?") ? `&created:max=${createdMax}` : `?created:max=${createdMax}`)
			: undefined;

		// Filter results so they are later than or equal to provided date. Must be in url-encoded RFC 3339 format. e.g. `2020-01-15T01:02:34-01:00` is RFC 3339 format. Url-encoded this will be `2020-01-15T01%3A02%3A34%2B01%3A00`
		createdMin
			? (endpoint += endpoint.includes("?") ? `&created:min=${createdMin}` : `?created:min=${createdMin}`)
			: undefined;

		// Filter by refund `id`. Accepts multiple as comma-separated values.
		idIn ? (endpoint += endpoint.includes("?") ? `&id:in=${idIn}` : `?id:in=${idIn}`) : undefined;

		// Controls the number of items per page in a limited (paginated) list of items.
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// Filter by `order_id`. Accepts multiple as comma-separated values.
		order_idIn
			? (endpoint += endpoint.includes("?") ? `&order_id:in=${order_idIn}` : `?order_id:in=${order_idIn}`)
			: undefined;

		// Specifies the page number in a limited (paginated) list of items.
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
