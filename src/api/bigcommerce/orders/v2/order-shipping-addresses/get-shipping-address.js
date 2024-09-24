import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Gets a shipping address associated with an order. Returned in the response is `shipping_quotes` object. Please use the "Get Shipping Quotes" Endpoint. Using the response will return a 204 for the shipping quote.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3NTI-get-a-shipping-address
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id, shipping_address_id } = req.query;

		let endpoint = `/v2/orders/${order_id}/shipping_addresses/${shipping_address_id}`;

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
