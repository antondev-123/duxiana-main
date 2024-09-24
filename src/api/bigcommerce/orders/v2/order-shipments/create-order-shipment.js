import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Creates an Order Shipment. For more details, see Shipping an Order (https://developer.bigcommerce.com/api-docs/orders/orders-api-overview#shipping-an-order).
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3NDQ-create-order-shipment
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id } = req.query;
		const { order_address_id, tracking_number, shipping_provider, items, shipping_method, comments, tracking_carrier } =
			req.body;

		let endpoint = `/v2/orders/${order_id}/shipments`;

		const body = {
			tracking_number,
			order_address_id,
			shipping_provider,
			items,
			shipping_method,
			comments,
			tracking_carrier
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
