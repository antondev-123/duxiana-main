import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Gets a Metafield object list, by `order_id`.. The maxiumum number of metafields is 50 per order.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ4MzE-get-metafields
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id, direction, key, limit, namespace, page } = req.query;

		let endpoint = `/v3/orders/${order_id}/metafields`;

		// Sort direction. Acceptable values are: `asc`, `desc`
		direction
			? (endpoint += endpoint.includes("?") ? `&direction=${direction}` : `?direction=${direction}`)
			: undefined;

		// Filter based on a metafield's key
		key ? (endpoint += endpoint.includes("?") ? `&key=${key}` : `?key=${key}`) : undefined;

		// Controls the number of items per page in a limited (paginated) list of products
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// Filter based on a metafield's key
		namespace
			? (endpoint += endpoint.includes("?") ? `&namespace=${namespace}` : `?namespace=${namespace}`)
			: undefined;

		// Specifies the page number in a limited (paginated) list of products
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
