import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Deletes line item/s in the cart.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQxOTc-delete-cart-line-item
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { cart_id, item_id, include } = req.query;

		let endpoint = `/v3/carts/${cart_id}/items/${item_id}`;

		// Filter items by `include`
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

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
