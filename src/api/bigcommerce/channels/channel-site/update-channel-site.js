import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Updates a site for provided channel.
 * @source https://developer.bigcommerce.com/api-reference/6cf0a4a0dc3c8-update-a-channel-site
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { channel_id } = req.query;
		const { url } = req.body;

		let endpoint = `/v3/channels/${channel_id}/site`;

		const body = {
			url
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
