import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Updates a carts `customer_id`.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQxOTk-update-customer-id
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { cart_id } = req.query;
		const { customer_id } = req.body;

		let endpoint = `/v3/carts/${cart_id}`;

		const body = {
			customer_id
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
