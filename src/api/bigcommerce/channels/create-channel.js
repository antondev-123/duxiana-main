import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Creates a `Channel`
 * @source https://developer.bigcommerce.com/api-reference/d649415abcb78-create-a-channel
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { config_meta, external_id, is_listable_from_ui, is_visible, is_enabled, status, name, type, platform } =
			req.body;

		let endpoint = `/v3/channels`;

		const body = {
			config_meta,
			external_id,
			is_listable_from_ui,
			is_visible,
			is_enabled,
			status,
			name,
			type,
			platform
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
