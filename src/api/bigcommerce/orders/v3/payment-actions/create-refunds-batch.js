import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Creates a refund.. This endpoint will accept a batch of one or more. Requires at least one of the following scopes: `store_v2_transactions`, `store_v2_orders`
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ4MzA-create-refunds-batch
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { items, reason, payments, merchant_calculated_override } = req.body;

		let endpoint = `/v3/orders/payment_actions/refunds`;

		const body = {
			items,
			reason,
			payments,
			merchant_calculated_override
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
