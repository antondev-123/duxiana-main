import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Creates a refund.
 * Requires at least one of the following scopes: `store_v2_orders`, `store_v2_transactions`
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ4MjY-create-a-refund
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id } = req.query;
		const { items, reason, payments, merchange_calculated_override } = req.body;

		let endpoint = `/v3/orders/${order_id}/payment_actions/refunds`;

		const body = {
			reason,
			payments,
			merchange_calculated_override,
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
