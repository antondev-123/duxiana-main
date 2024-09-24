import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Updates an existing consignment. Address, line item IDs or the shipping option ID can be updated using this endpoint.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ0Nzc-update-checkout-consignment
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { checkout_id, consignment_id, include } = req.query;
		const { address, line_items, shipping_option_id } = req.body;

		let endpoint = `/v3/checkouts/${checkout_id}/consignments/${consignment_id}`;

		// Filter items by `include`
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

		const body = {
			address,
			line_items,
			shipping_option_id
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
