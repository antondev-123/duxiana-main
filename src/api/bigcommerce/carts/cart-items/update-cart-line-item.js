import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Updates an existing, single line item in the cart.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQxOTY-update-cart-line-item
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { cart_id, item_id, include } = req.query;
		const { line_item } = req.body;

		let endpoint = `/v3/carts/${cart_id}/items/${item_id}`;

		// Filter items by `include`
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

		const body = {
			line_item
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
