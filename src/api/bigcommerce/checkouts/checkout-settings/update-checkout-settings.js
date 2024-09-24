import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Update checkout settings
 * @source https://developer.bigcommerce.com/api-reference/b3A6NDkxOTE4NDQ-update-checkout-settings
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const {
			custom_checkout_script_url,
			order_confirmation_use_custom_checkout_script,
			custom_order_confirmation_script_url
		} = req.body;

		let endpoint = `/v3/checkouts/settings`;

		const body = {
			custom_checkout_script_url,
			order_confirmation_use_custom_checkout_script,
			custom_order_confirmation_script_url
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
