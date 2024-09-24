import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Get a Count of All Countries
 * @source https://developer.bigcommerce.com/api-reference/6cf5ee12817ab-get-a-count-of-all-countries
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		let endpoint = `/v2/countries/count`;

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
