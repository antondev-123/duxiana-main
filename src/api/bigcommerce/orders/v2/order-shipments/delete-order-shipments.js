import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Deletes all shipments associated with an order.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3NDU-delete-order-shipments
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id } = req.query;

		let endpoint = `/v2/orders/${order_id}/shipments`;

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
