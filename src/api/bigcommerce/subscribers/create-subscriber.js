import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Creates a Subscriber.
 * @source https://developer.bigcommerce.com/api-reference/0d422752d8859-create-a-subscriber
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { email, first_name, last_name, source, order_id, channel_id } = req.body;

		let endpoint = `/v3/customers/subscribers`;

		const body = {
			email,
			first_name,
			last_name,
			source,
			order_id,
			channel_id
		};

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
