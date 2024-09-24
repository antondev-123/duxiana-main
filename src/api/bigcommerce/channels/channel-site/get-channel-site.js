import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Alias of `GET /sites?channel_id=channel_id`. Returns site data for the specified channel.
 * @source https://developer.bigcommerce.com/api-reference/e343543476a1a-get-a-channel-site
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { channel_id } = req.query;

		let endpoint = `/v3/channels/${channel_id}/site`;

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
