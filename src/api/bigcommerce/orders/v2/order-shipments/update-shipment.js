import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Updates an existing shipment associated with an order.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3NDg-update-a-shipment
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id, shipment_id } = req.query;
		const { tracking_number, order_address_id, shipping_provider, items } = req.body;

		let endpoint = `/v2/orders/${order_id}/shipments/${shipment_id}`;

		const body = {
			tracking_number,
			order_address_id,
			shipping_provider,
			items
		};

		const result = await BigCommerce({
			endpoint,
			method: "put",
			body
		});

		res.json(result.data.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
