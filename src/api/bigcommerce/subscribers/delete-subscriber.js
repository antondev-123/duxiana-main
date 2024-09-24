import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Deletes a Subscriber.
 * @source https://developer.bigcommerce.com/api-reference/e43cc0e279b20-delete-a-subscriber
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { subscriber_id } = req.query;

		let endpoint = `/v3/customers/subscribers/${subscriber_id}`;

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
