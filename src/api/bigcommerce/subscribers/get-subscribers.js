import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Returns a list of `Subscribers`. Optional filter parameters can be passed in.
 * @source https://developer.bigcommerce.com/api-reference/9463521ead2f5-get-subscribers
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { limit, date_created, date_modified, email, first_name, last_name, order_id, page, source, id } = req.query;

		let endpoint = `/v3/customers/subscribers`;

		// Filter items by `limit`
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// Filter items by `date_created`.
		date_created
			? (endpoint += endpoint.includes("?") ? `&date_created=${date_created}` : `?date_created=${date_created}`)
			: undefined;

		// Filter items by `date_modified`.
		date_modified
			? (endpoint += endpoint.includes("?") ? `&date_modified=${date_modified}` : `?date_modified=${date_modified}`)
			: undefined;

		// Filter items by `email`.
		email ? (endpoint += endpoint.includes("?") ? `&email=${email}` : `?email=${email}`) : undefined;

		// Filter items by `first_name`.
		first_name
			? (endpoint += endpoint.includes("?") ? `&first_name=${first_name}` : `?first_name=${first_name}`)
			: undefined;

		// Filter items by `last_name`.
		last_name
			? (endpoint += endpoint.includes("?") ? `&last_name=${last_name}` : `?last_name=${last_name}`)
			: undefined;

		// Filter items by `order_id`.
		order_id ? (endpoint += endpoint.includes("?") ? `&order_id=${order_id}` : `?order_id=${order_id}`) : undefined;

		// Filter items by `page`.
		page ? (endpoint += endpoint.includes("?") ? `&page=${page}` : `?page=${page}`) : undefined;

		// Filter items by `source`.
		source ? (endpoint += endpoint.includes("?") ? `&source=${source}` : `?source=${source}`) : undefined;

		// Filter items by `id`.
		id ? (endpoint += endpoint.includes("?") ? `&id=${id}` : `?id=${id}`) : undefined;

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
