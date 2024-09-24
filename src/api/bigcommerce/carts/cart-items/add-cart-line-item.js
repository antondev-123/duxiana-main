import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Add cart line items
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQxOTQ-add-cart-line-items
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { cart_id, include } = req.query;
		const { line_items, custom_items, gift_certificates } = req.body;

		let endpoint = `/v3/carts/${cart_id}/items`;

		// Filter items by `include`
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

		const body = {
			line_items,
			custom_items,
			gift_certificates
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
