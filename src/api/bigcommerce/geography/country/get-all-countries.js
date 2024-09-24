import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Get All Countries
 * @source https://developer.bigcommerce.com/api-reference/9f4570c698ed0-get-all-countries
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { limit } = req.query;

		let endpoint = `/v2/countries`;

		// Filter items by `limit`
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

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
