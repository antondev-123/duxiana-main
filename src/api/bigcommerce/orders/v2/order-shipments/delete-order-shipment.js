import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Deletes a shipment associated with an order.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3NDk-delete-an-order-shipment
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id, shipment_id } = req.query;

		let endpoint = `/v2/orders/${order_id}/shipments/${shipment_id}`;

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
