import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Returns a list of all `Product Reviews`. Optional parameters can be passed in.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQzNTQ-get-product-reviews
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { product_id, exclude_fields, include_fields, limit, page, status } = req.query;

		let endpoint = `/v3/catalog/products/${product_id}/reviews`;

		// Filter items by `exclude_fields`.
		exclude_fields
			? (endpoint += endpoint.includes("?") ? `&exclude_fields=${exclude_fields}` : `?exclude_fields=${exclude_fields}`)
			: undefined;

		// Filter items by `include_fields`.
		include_fields
			? (endpoint += endpoint.includes("?") ? `&include_fields=${include_fields}` : `?include_fields=${include_fields}`)
			: undefined;

		// Filter items by `limit`.
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// Filter items by `page`.
		page ? (endpoint += endpoint.includes("?") ? `&page=${page}` : `?page=${page}`) : undefined;

		// Filter items by `status`.
		status ? (endpoint += endpoint.includes("?") ? `&status=${status}` : `?status=${status}`) : undefined;

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
