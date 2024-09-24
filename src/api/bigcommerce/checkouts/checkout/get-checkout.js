import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Returns a Checkout.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ0NzM-get-a-checkout
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { checkout_id, include } = req.query;

		let endpoint = `/v3/checkouts/${checkout_id}`;

		// Filter items by `include`.
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

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
