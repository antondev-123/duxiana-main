import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Creates a cart redirect URL for redirecting a shopper to an already created cart using the cartId.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQxOTU-create-cart-redirect-url
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { cart_id, include } = req.query;

		let endpoint = `/v3/carts/${cart_id}/redirect_urls`;

		// Filter items by `include`
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

		const body = {};

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
