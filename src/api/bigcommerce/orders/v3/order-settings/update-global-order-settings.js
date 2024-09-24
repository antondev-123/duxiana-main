import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Updates global order settings.
 * @source https://developer.bigcommerce.com/api-reference/b3A6NDgxNDAzNDM-update-global-order-settings
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { notifications } = req.body;

		let endpoint = `/v3/orders/settings`;

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
