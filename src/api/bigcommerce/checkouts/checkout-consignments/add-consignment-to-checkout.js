import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Adds a new consignment to a checkout.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ0NzY-add-consignment-to-checkout
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { checkout_id, include } = req.query;
		const { body } = req.body;

		let endpoint = `/v3/checkouts/${checkout_id}/consignments`;

		// Filter items by `include`
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

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
