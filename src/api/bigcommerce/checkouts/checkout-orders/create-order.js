import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Creates an order.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ0ODE-create-an-order
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { checkout_id } = req.query;

		let endpoint = `/v3/checkouts/${checkout_id}/orders`;

		const body = false;

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
