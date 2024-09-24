import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Get checkout settings
 * @source https://developer.bigcommerce.com/api-reference/b3A6NDkxOTE4NDM-get-checkout-settings
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		let endpoint = `/v3/checkouts/settings`;

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
