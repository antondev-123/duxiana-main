import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Returns a `Channel`. Channel ID `1` returns the default BigCommerce storefront.
 * @source https://developer.bigcommerce.com/api-reference/efa3639276cde-get-a-channel
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { channel_id, include } = req.query;

		let endpoint = `/v3/channels/${channel_id}`;

		// Filter items by `include`.
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

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
