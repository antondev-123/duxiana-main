import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Get a Country
 * @source https://developer.bigcommerce.com/api-reference/c6ff1ffd48505-get-a-country
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { country_id } = req.query;

		let endpoint = `/v2/countries/${country_id}`;

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
