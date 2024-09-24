import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Deletes the Channel's site.
 * @source https://developer.bigcommerce.com/api-reference/3ed9a02bffc2f-delete-a-channel-site
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { channel_id } = req.query;

		let endpoint = `/v3/channels/${channel_id}/site`;

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
