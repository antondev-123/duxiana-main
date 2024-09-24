import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Returns a single `Product`. Optional parameters can be passed in.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQyODg-get-a-product
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { product_id, exclude_fields, include_fields, include } = req.query;

		let endpoint = `/v3/catalog/products/${product_id}`;

		// Filter items by `exclude_fields`.
		exclude_fields
			? (endpoint += endpoint.includes("?") ? `&exclude_fields=${exclude_fields}` : `?exclude_fields=${exclude_fields}`)
			: undefined;

		// Filter items by `include_fields`.
		include_fields
			? (endpoint += endpoint.includes("?") ? `&include_fields=${include_fields}` : `?include_fields=${include_fields}`)
			: undefined;

		// Filter items by `include`.
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

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
