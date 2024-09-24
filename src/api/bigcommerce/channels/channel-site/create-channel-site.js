import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Alias of POST `/sites`. Creates a site for provided channel.
 * @source https://developer.bigcommerce.com/api-reference/69072d0e18e9f-create-a-channel-site
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { channel_id } = req.query;
		const { url } = req.body;

		let endpoint = `/v3/channels/${channel_id}/site`;

		const body = {
			url,
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
