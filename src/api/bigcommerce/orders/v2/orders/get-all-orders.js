import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Gets a list of orders using the filter query.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3MzQ-get-all-orders
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const {
			cart_id,
			channel_id,
			customer_id,
			email,
			is_deleted,
			limit,
			max_date_created,
			max_date_modified,
			max_id,
			max_total,
			min_date_created,
			min_date_modified,
			min_id,
			min_total,
			page,
			payment_method,
			sort,
			status_id
		} = req.query;

		let endpoint = `/v2/orders`;

		// The cart ID of the order
		cart_id ? (endpoint += endpoint.includes("?") ? `&cart_id=${cart_id}` : `?cart_id=${cart_id}`) : undefined;

		// The channel ID of the order
		channel_id
			? (endpoint += endpoint.includes("?") ? `&channel_id=${channel_id}` : `?channel_id=${channel_id}`)
			: undefined;

		// The customer ID of the order
		customer_id
			? (endpoint += endpoint.includes("?") ? `&customer_id=${customer_id}` : `?customer_id=${customer_id}`)
			: undefined;

		// The email address of the order
		email ? (endpoint += endpoint.includes("?") ? `&email=${email}` : `?email=${email}`) : undefined;

		// Whether the order is deleted
		is_deleted
			? (endpoint += endpoint.includes("?") ? `&is_deleted=${is_deleted}` : `?is_deleted=${is_deleted}`)
			: undefined;

		// The maximum number of orders to return
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// The maximum date created of the order
		max_date_created
			? (endpoint += endpoint.includes("?")
					? `&max_date_created=${max_date_created}`
					: `?max_date_created=${max_date_created}`)
			: undefined;

		// The maximum date modified of the order
		max_date_modified
			? (endpoint += endpoint.includes("?")
					? `&max_date_modified=${max_date_modified}`
					: `?max_date_modified=${max_date_modified}`)
			: undefined;

		// The maximum ID of the order
		max_id ? (endpoint += endpoint.includes("?") ? `&max_id=${max_id}` : `?max_id=${max_id}`) : undefined;

		// The maximum total of the order
		max_total
			? (endpoint += endpoint.includes("?") ? `&max_total=${max_total}` : `?max_total=${max_total}`)
			: undefined;

		// The minimum date created of the order
		min_date_created
			? (endpoint += endpoint.includes("?")
					? `&min_date_created=${min_date_created}`
					: `?min_date_created=${min_date_created}`)
			: undefined;

		// The minimum date modified of the order
		min_date_modified
			? (endpoint += endpoint.includes("?")
					? `&min_date_modified=${min_date_modified}`
					: `?min_date_modified=${min_date_modified}`)
			: undefined;

		// The minimum ID of the order
		min_id ? (endpoint += endpoint.includes("?") ? `&min_id=${min_id}` : `?min_id=${min_id}`) : undefined;

		// The minimum total of the order
		min_total
			? (endpoint += endpoint.includes("?") ? `&min_total=${min_total}` : `?min_total=${min_total}`)
			: undefined;

		// The page of orders to return
		page ? (endpoint += endpoint.includes("?") ? `&page=${page}` : `?page=${page}`) : undefined;

		// The payment method of the order
		payment_method
			? (endpoint += endpoint.includes("?") ? `&payment_method=${payment_method}` : `?payment_method=${payment_method}`)
			: undefined;

		// The sort order of the order
		sort ? (endpoint += endpoint.includes("?") ? `&sort=${sort}` : `?sort=${sort}`) : undefined;

		// The status ID of the order
		status_id
			? (endpoint += endpoint.includes("?") ? `&status_id=${status_id}` : `?status_id=${status_id}`)
			: undefined;

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
