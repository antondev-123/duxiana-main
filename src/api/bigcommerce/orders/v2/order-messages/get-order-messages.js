import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Gets the messages associated with an order.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3NTA-get-order-messages
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const {
			order_id,
			customer_id,
			is_flagged,
			limit,
			max_id,
			max_date_created,
			min_id,
			min_date_created,
			page,
			status
		} = req.query;

		let endpoint = `/v2/orders/${order_id}/messages`;

		// The customer ID
		customer_id
			? (endpoint += endpoint.includes("?") ? `&customer_id=${customer_id}` : `?customer_id=${customer_id}`)
			: undefined;

		// Whether or not the message is flagged
		is_flagged
			? (endpoint += endpoint.includes("?") ? `&is_flagged=${is_flagged}` : `?is_flagged=${is_flagged}`)
			: undefined;

		// Number of results to return
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// The maximum order ID
		max_id ? (endpoint += endpoint.includes("?") ? `&max_id=${max_id}` : `?max_id=${max_id}`) : undefined;

		// Maximum date the order was created in RFC-2822 or ISO-8601
		// e.g. RFC-2822: `Thu, 20 Apr 2017 11:32:00 -0400`
		// e.g. ISO-8601: `2017-04-20T11:32:00.000-04:00`
		max_date_created
			? (endpoint += endpoint.includes("?")
					? `&max_date_created=${max_date_created}`
					: `?max_date_created=${max_date_created}`)
			: undefined;

		// The minimum order ID
		min_id ? (endpoint += endpoint.includes("?") ? `&min_id=${min_id}` : `?min_id=${min_id}`) : undefined;

		// Minimum date the order was created in RFC-2822 or ISO-8601
		// e.g. RFC-2822: `Thu, 20 Apr 2017 11:32:00 -0400`
		// e.g. ISO-8601: `2017-04-20T11:32:00.000-04:00`
		min_date_created
			? (endpoint += endpoint.includes("?")
					? `&min_date_created=${min_date_created}`
					: `?min_date_created=${min_date_created}`)
			: undefined;

		// The page to return in the response
		page ? (endpoint += endpoint.includes("?") ? `&page=${page}` : `?page=${page}`) : undefined;

		// The status of the message
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
