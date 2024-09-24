import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Returns order settings for a specific channel.
 * @source https://developer.bigcommerce.com/api-reference/b3A6NDgxNDg2NDU-get-channel-order-settings
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { channel_id } = req.query;

		let endpoint = `/v3/orders/settings/channels/${channel_id}`;

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
