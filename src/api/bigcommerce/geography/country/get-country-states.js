import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Get All Country's States
 * @source https://developer.bigcommerce.com/api-reference/f069963e51b9b-get-all-country-s-states
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { country_id, limit, page, state, state_abbreviations } = req.query;

		let endpoint = `/v2/countries/${country_id}/states`;

		// Filter items by `limit`
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// Filter items by `page`
		page ? (endpoint += endpoint.includes("?") ? `&page=${page}` : `?page=${page}`) : undefined;

		// Filter items by `state`
		state ? (endpoint += endpoint.includes("?") ? `&state=${state}` : `?state=${state}`) : undefined;

		// Filter items by `state_abbreviations`
		state_abbreviations
			? (endpoint += endpoint.includes("?")
					? `&state_abbreviations=${state_abbreviations}`
					: `?state_abbreviations=${state_abbreviations}`)
			: undefined;

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
