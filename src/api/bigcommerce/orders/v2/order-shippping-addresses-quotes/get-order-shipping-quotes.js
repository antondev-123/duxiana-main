import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Gets all shipping quotes persisted on an order.. This is a read only endpoint and the output can vary based on the shipping quote. A shipping quote can only be generated using the storefront at this time. Orders that are created in the control panel or using the API return a 204 for this endpoint since a shipping quote is not generated during that process.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3NTQ-get-order-shipping-quotes
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id, shipping_address_id } = req.query;

		let endpoint = `/v2/orders/${order_id}/shipping_addresses/${shipping_address_id}/shipping_quotes`;

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
