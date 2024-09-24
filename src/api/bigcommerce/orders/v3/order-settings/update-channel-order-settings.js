import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Updates order settings for a specific channel.
 * Note: You must override both notifications `email_addresses` or neither, i.e. either both
 * notification `email_addresses` are an array of valid email addresses, or both `email_addresses`
 * must be `null`. You may not have one set to an array of addesses and the other set to `null`.
 * @source https://developer.bigcommerce.com/api-reference/b3A6NDgxNDg2NDY-update-channel-order-settings
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { channel_id } = req.query;
		const { notifications } = req.body;

		let endpoint = `/v3/orders/settings/channels/${channel_id}`;

		const body = {
			notifications
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
