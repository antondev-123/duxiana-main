import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Returns one or more content pages. This endpoint supports bulk operations.
 * @source https://developer.bigcommerce.com/api-reference/831028b2a1c70-get-pages
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { channel_id, idIn, limit, name, nameLike, page } = req.query;

		let endpoint = `/v3/content/pages`;

		// Filter items by `channel_id`.
		channel_id
			? (endpoint += endpoint.includes("?") ? `&channel_id=${channel_id}` : `?channel_id=${channel_id}`)
			: undefined;

		// Filter items by `id:in`.
		idIn ? (endpoint += endpoint.includes("?") ? `&id:in=${idIn}` : `?id:in=${idIn}`) : undefined;

		// Filter items by `limit`.
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// Filter items by `name`.
		name ? (endpoint += endpoint.includes("?") ? `&name=${name}` : `?name=${name}`) : undefined;

		// Filter items by `name:like`.
		nameLike ? (endpoint += endpoint.includes("?") ? `&name:like=${nameLike}` : `?name:like=${nameLike}`) : undefined;

		// Filter items by `page`.
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
