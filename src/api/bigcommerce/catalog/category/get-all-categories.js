import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Returns a list of `Categories`. Optional filter parameters can be passed in.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQzNTk-get-all-categories
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
			is_visible,
			keyword,
			limit,
			name,
			nameLike,
			page,
			page_title,
			page_titleLike,
			parent_id,
			parent_idGreater,
			parent_idIn,
			parent_idLess,
			parent_idMax,
			parent_idMin
		} = req.query;

		let endpoint = `/v3/catalog/categories`;

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
		idLess ? (endpoint += endpoint.includes("?") ? `&id:less=${idLess}` : `?id:less=${idLess}`) : undefined;

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

		// Filter items by `is_visible`.
		is_visible
			? (endpoint += endpoint.includes("?") ? `&is_visible=${is_visible}` : `?is_visible=${is_visible}`)
			: undefined;

		// Filter items by `keyword`.
		keyword ? (endpoint += endpoint.includes("?") ? `&keyword=${keyword}` : `?keyword=${keyword}`) : undefined;

		// Filter items by `limit`.
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// Filter items by `name`.
		name ? (endpoint += endpoint.includes("?") ? `&name=${name}` : `?name=${name}`) : undefined;

		// Filter items by `name:like`.
		nameLike ? (endpoint += endpoint.includes("?") ? `&name:like=${nameLike}` : `?name:like=${nameLike}`) : undefined;

		// Filter items by `page`.
		page ? (endpoint += endpoint.includes("?") ? `&page=${page}` : `?page=${page}`) : undefined;

		// Filter items by `page_title`.
		page_title
			? (endpoint += endpoint.includes("?") ? `&page_title=${page_title}` : `?page_title=${page_title}`)
			: undefined;

		// Filter items by `page_title:like`.
		page_titleLike
			? (endpoint += endpoint.includes("?")
					? `&page_title:like=${page_titleLike}`
					: `?page_title:like=${page_titleLike}`)
			: undefined;

		// Filter items by `parent_id`.
		parent_id
			? (endpoint += endpoint.includes("?") ? `&parent_id=${parent_id}` : `?parent_id=${parent_id}`)
			: undefined;

		// Filter items by `parent_id:greater`.
		parent_idGreater
			? (endpoint += endpoint.includes("?")
					? `&parent_id:greater=${parent_idGreater}`
					: `?parent_id:greater=${parent_idGreater}`)
			: undefined;

		// Filter items by `parent_id:in`.
		parent_idIn
			? (endpoint += endpoint.includes("?") ? `&parent_id:in=${parent_idIn}` : `?parent_id:in=${parent_idIn}`)
			: undefined;

		// Filter items by `parent_id:less`.
		parent_idLess
			? (endpoint += endpoint.includes("?") ? `&parent_id:less=${parent_idLess}` : `?parent_id:less=${parent_idLess}`)
			: undefined;

		// Filter items by `parent_id:max`.
		parent_idMax
			? (endpoint += endpoint.includes("?") ? `&parent_id:max=${parent_idMax}` : `?parent_id:max=${parent_idMax}`)
			: undefined;

		// Filter items by `parent_id:min`.
		parent_idMin
			? (endpoint += endpoint.includes("?") ? `&parent_id:min=${parent_idMin}` : `?parent_id:min=${parent_idMin}`)
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
