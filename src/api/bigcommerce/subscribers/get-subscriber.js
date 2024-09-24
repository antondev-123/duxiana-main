import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Returns a Subscriber.
 * @source https://developer.bigcommerce.com/api-reference/1a58ea20602b1-get-a-subscriber
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { subscriber_id } = req.query;

		let endpoint = `/v3/customers/subscribers/${subscriber_id}`;

		const result = await BigCommerce.get(endpoint);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
