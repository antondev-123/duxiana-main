import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Returns a list of refunds ordered by refund ID in ascending order for the given order.
 * Requires at least one of the following scopes: `store_v2_transactions_read_only`,
 * `store_v2_transactions`, `store_v2_orders_read_only`, `store_v2_orders`
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ4Mjc-get-refunds-for-order
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id } = req.query;

		let endpoint = `/v3/orders/${order_id}/payment_actions/refunds`;

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
