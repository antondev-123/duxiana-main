import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Creates a cart
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQxOTM-create-a-cart
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { include } = req.query;
		const { customer_id, channel_id, line_items, custom_items, gift_certificates, currency, locale } = req.body;

		let endpoint = `/v3/carts`;

		// Filter items by `include`
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

		const body = {
			customer_id,
			channel_id,
			line_items,
			custom_items,
			gift_certificates,
			currency,
			locale
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
