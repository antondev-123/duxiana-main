import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Change customer message to an existing Checkout. Limits: 2000 characters for customer message
 * @source https://developer.bigcommerce.com/api-reference/b3A6NDkxOTE4MzQ-update-customer-messages
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { checkout_id } = req.query;
		const { customer_message } = req.body;

		let endpoint = `/v3/checkouts/${checkout_id}`;

		const body = {
			customer_message
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
