import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Calculate the tax amount, total refund amount and get available payment options for an order refund by
 * providing items and costs or quantities to refund.
 * Requires at least one of the following scopes: `store_v2_orders`, `store_v2_transactions`
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ4MjU-create-a-refund-quote
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id } = req.query;
		const { items } = req.body;

		let endpoint = `/v3/orders/${order_id}/payment_actions/refund_quotes`;

		const body = {
			order_id,
			items
		};

		const result = await BigCommerce({
			endpoint,
			method: "post",
			body
		});

		res.json(result.data.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
