import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Archives an order. To remove a single product from an order, see `PUT /orders/{order_id}`
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3MzI-archive-an-order
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id } = req.query;

		let endpoint = `/v2/orders/${order_id}`;

		const result = await BigCommerce({
			endpoint,
			method: "delete"
		});

		res.json(result.data.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
