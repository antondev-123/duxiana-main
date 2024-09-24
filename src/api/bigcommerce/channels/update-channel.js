import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Updates a `Channel`.
 * @source https://developer.bigcommerce.com/api-reference/6fc67ceec7f2d-update-a-channel
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { channel_id, config_meta, external_id, is_listable_from_ui, is_visible, is_enabled, status, name } =
			req.body;

		let endpoint = `/v3/channels/${channel_id}`;

		const body = {
			config_meta,
			external_id,
			is_listable_from_ui,
			is_visible,
			is_enabled,
			status,
			name
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
