import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Gets an order. To learn more about creating or updating orders, see Orders Overview (https://developer.bigcommerce.com/api-docs/orders/orders-api-overview)
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3MzA-get-an-order
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id } = req.query;

		let endpoint = `/v2/orders/${order_id}`;

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
