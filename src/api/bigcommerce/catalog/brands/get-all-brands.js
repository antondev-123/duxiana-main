import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Returns a list of `Brands`. Optional filter parameters can be passed in.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQzNzA-get-all-brands
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const {
			exclude_fields,
			id,
			idGreater,
			idIn,
			idLess,
			idMax,
			idMin,
			idNot_in,
			include_fields,
			limit,
			name,
			page,
			page_title
		} = req.query;

		let endpoint = `/v3/catalog/brands`;

		// Filter items by `exclude_fields`.
		exclude_fields
			? (endpoint += endpoint.includes("?") ? `&exclude_fields=${exclude_fields}` : `?exclude_fields=${exclude_fields}`)
			: undefined;

		// Filter items by `id`.
		id ? (endpoint += endpoint.includes("?") ? `&id=${id}` : `?id=${id}`) : undefined;

		// Filter items by `id:greater`.
		idGreater
			? (endpoint += endpoint.includes("?") ? `&id:greater=${idGreater}` : `?id:greater=${idGreater}`)
			: undefined;

		// Filter items by `id:in`.
		idIn ? (endpoint += endpoint.includes("?") ? `&id:in=${idIn}` : `?id:in=${idIn}`) : undefined;

		// Filter items by `id:less`.
		idLess ? (endpoint += endpoint.includes("?") ? `&id:less=${idIn.idLess}` : `?id:less=${idIn.idLess}`) : undefined;

		// Filter items by `id:max`.
		idMax ? (endpoint += endpoint.includes("?") ? `&id:max=${idMax}` : `?id:max=${idMax}`) : undefined;

		// Filter items by `id:min`.
		idMin ? (endpoint += endpoint.includes("?") ? `&id:min=${idMin}` : `?id:min=${idMin}`) : undefined;

		// Filter items by `id:not_in`.
		idNot_in ? (endpoint += endpoint.includes("?") ? `&id:not_in=${idNot_in}` : `?id:not_in=${idNot_in}`) : undefined;

		// Filter items by `include_fields`.
		include_fields
			? (endpoint += endpoint.includes("?") ? `&include_fields=${include_fields}` : `?include_fields=${include_fields}`)
			: undefined;

		// Filter items by `limit`.
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// Filter items by `name`.
		name ? (endpoint += endpoint.includes("?") ? `&name=${name}` : `?name=${name}`) : undefined;

		// Filter items by `page`.
		page ? (endpoint += endpoint.includes("?") ? `&page=${page}` : `?page=${page}`) : undefined;

		// Filter items by `page_title`.
		page_title
			? (endpoint += endpoint.includes("?") ? `&page_title=${page_title}` : `?page_title=${page_title}`)
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
