import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Returns a single `Brand`. Optional filter parameters can be passed in.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQzNzM-get-a-brand
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { brand_id, exclude_fields, include_fields } = req.query;

		let endpoint = `/v3/catalog/brands/${brand_id}`;

		// Filter items by `exclude_fields`.
		exclude_fields
			? (endpoint += endpoint.includes("?") ? `&exclude_fields=${exclude_fields}` : `?exclude_fields=${exclude_fields}`)
			: undefined;

		// Filter items by `include_fields`.
		include_fields
			? (endpoint += endpoint.includes("?") ? `&include_fields=${include_fields}` : `?include_fields=${include_fields}`)
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
