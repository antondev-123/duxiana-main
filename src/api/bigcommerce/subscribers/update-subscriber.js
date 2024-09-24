import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Updates a Subscriber.
 * @source https://developer.bigcommerce.com/api-reference/74b172127e491-update-a-subscriber
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { subscriber_id, email } = req.query;

		let endpoint = `/v3/customers/subscribers/${subscriber_id}`;

		const body = {
			email
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
