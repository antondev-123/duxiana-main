import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Returns global order settings.
 * @source https://developer.bigcommerce.com/api-reference/b3A6NDgxNDAzNDI-get-global-order-settings
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		let endpoint = `/v3/orders/settings`;

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
