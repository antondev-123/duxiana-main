import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Returns a list of Products. Optional filter parameters can be passed in.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQyODQ-get-all-products
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const {
			availability,
			brand_id,
			categories,
			categoriesIn,
			condition,
			date_last_imported,
			date_last_importedMax,
			date_last_importedMin,
			date_modified,
			date_modifiedMax,
			date_modifiedMin,
			direction,
			exclude_fields,
			id,
			idGreater,
			idIn,
			idLess,
			idMax,
			idMin,
			idNot_in,
			include,
			include_fields,
			inventory_level,
			inventory_levelGreater,
			inventory_levelIn,
			inventory_levelLess,
			inventory_levelMax,
			inventory_levelMin,
			inventory_levelNot_in,
			inventory_low,
			is_featured,
			is_free_shipping,
			is_visible,
			keyword,
			keyword_context,
			limit,
			name,
			out_of_stock,
			page,
			price,
			sku,
			skuIn,
			sort,
			status,
			total_sold,
			type,
			upc,
			weight
		} = req.query;

		let endpoint = `/v3/catalog/products`;

		// Filter items by `availability`.
		availability
			? (endpoint += endpoint.includes("?") ? `&availability=${availability}` : `?availability=${availability}`)
			: undefined;

		// Filter items by `brand_id`.
		brand_id ? (endpoint += endpoint.includes("?") ? `&brand_id=${brand_id}` : `?brand_id=${brand_id}`) : undefined;

		// Filter items by `categories`.
		categories
			? (endpoint += endpoint.includes("?") ? `&categories=${categories}` : `?categories=${categories}`)
			: undefined;

		// Filter items by `categories:in`.
		categoriesIn
			? (endpoint += endpoint.includes("?") ? `&categories:in=${categoriesIn}` : `?categories:in=${categoriesIn}`)
			: undefined;

		// Filter items by `condition`.
		condition
			? (endpoint += endpoint.includes("?") ? `&condition=${condition}` : `?condition=${condition}`)
			: undefined;

		// Filter items by `date_last_imported`.
		date_last_imported
			? (endpoint += endpoint.includes("?")
					? `&date_last_imported=${date_last_imported}`
					: `?date_last_imported=${date_last_imported}`)
			: undefined;

		// Filter items by `date_last_imported:max`.
		date_last_importedMax
			? (endpoint += endpoint.includes("?")
					? `&date_last_imported:max=${date_last_importedMax}`
					: `?date_last_imported:max=${date_last_importedMax}`)
			: undefined;

		// Filter items by `date_last_imported:min`.
		date_last_importedMin
			? (endpoint += endpoint.includes("?")
					? `&date_last_imported:min=${date_last_importedMin}`
					: `?date_last_imported:min=${date_last_importedMin}`)
			: undefined;

		// Filter items by `date_modified`
		date_modified
			? (endpoint += endpoint.includes("?") ? `&date_modified=${date_modified}` : `?date_modified=${date_modified}`)
			: undefined;

		// Filter items by `date_modified:max`.
		date_modifiedMax
			? (endpoint += endpoint.includes("?")
					? `&date_modified:max=${date_modifiedMax}`
					: `?date_modified:max=${date_modifiedMax}`)
			: undefined;

		// Filter items by `date_modified:min`.
		date_modifiedMin
			? (endpoint += endpoint.includes("?")
					? `&date_modified:min=${date_modifiedMin}`
					: `?date_modified:min=${date_modifiedMin}`)
			: undefined;

		// Filter items by `direction`.
		direction
			? (endpoint += endpoint.includes("?") ? `&direction=${direction}` : `?direction=${direction}`)
			: undefined;

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

		// Filter items by `include`.
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

		// Filter items by `include_fields`.
		include_fields
			? (endpoint += endpoint.includes("?") ? `&include_fields=${include_fields}` : `?include_fields=${include_fields}`)
			: undefined;

		// Filter items by `inventory_level`.
		inventory_level
			? (endpoint += endpoint.includes("?")
					? `&inventory_level=${inventory_level}`
					: `?inventory_level=${inventory_level}`)
			: undefined;

		// Filter items by `inventory_level:greater`.
		inventory_levelGreater
			? (endpoint += endpoint.includes("?")
					? `&inventory_level:greater=${inventory_levelGreater}`
					: `?inventory_level:greater=${inventory_levelGreater}`)
			: undefined;

		// Filter items by `inventory_level:in`.
		inventory_levelIn
			? (endpoint += endpoint.includes("?")
					? `&inventory_level:in=${inventory_levelIn}`
					: `?inventory_level:in=${inventory_levelIn}`)
			: undefined;

		// Filter items by `inventory_level:less`.
		inventory_levelLess
			? (endpoint += endpoint.includes("?")
					? `&inventory_level:less=${inventory_levelLess}`
					: `?inventory_level:less=${inventory_levelLess}`)
			: undefined;

		// Filter items by `inventory_level:max`.
		inventory_levelMax
			? (endpoint += endpoint.includes("?")
					? `&inventory_level:max=${inventory_levelMax}`
					: `?inventory_level:max=${inventory_levelMax}`)
			: undefined;

		// Filter items by `inventory_level:min`.
		inventory_levelMin
			? (endpoint += endpoint.includes("?")
					? `&inventory_level:min=${inventory_levelMin}`
					: `?inventory_level:min=${inventory_levelMin}`)
			: undefined;

		// Filter items by `inventory_level:not_in`.
		inventory_levelNot_in
			? (endpoint += endpoint.includes("?")
					? `&inventory_level:not_in=${inventory_levelNot_in}`
					: `?inventory_level:not_in=${inventory_levelNot_in}`)
			: undefined;

		// Filter items by `inventory_low`.
		inventory_low
			? (endpoint += endpoint.includes("?") ? `&inventory_low=${inventory_low}` : `?inventory_low=${inventory_low}`)
			: undefined;

		// Filter items by `is_featured`.
		is_featured
			? (endpoint += endpoint.includes("?") ? `&is_featured=${is_featured}` : `?is_featured=${is_featured}`)
			: undefined;

		// Filter items by `is_free_shipping`.
		is_free_shipping
			? (endpoint += endpoint.includes("?")
					? `&is_free_shipping=${is_free_shipping}`
					: `?is_free_shipping=${is_free_shipping}`)
			: undefined;

		// Filter items by `is_visible`.
		is_visible
			? (endpoint += endpoint.includes("?") ? `&is_visible=${is_visible}` : `?is_visible=${is_visible}`)
			: undefined;

		// Filter items by `keyword`.
		keyword ? (endpoint += endpoint.includes("?") ? `&keyword=${keyword}` : `?keyword=${keyword}`) : undefined;

		// Filter items by `keyword_context`.
		keyword_context
			? (endpoint += endpoint.includes("?")
					? `&keyword_context=${keyword_context}`
					: `?keyword_context=${keyword_context}`)
			: undefined;

		// Filter items by `limit`.
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// Filter items by `name`.
		name ? (endpoint += endpoint.includes("?") ? `&name=${name}` : `?name=${name}`) : undefined;

		// Filter items by `out_of_stock`.
		out_of_stock
			? (endpoint += endpoint.includes("?") ? `&out_of_stock=${out_of_stock}` : `?out_of_stock=${out_of_stock}`)
			: undefined;

		// Filter items by `page`.
		page ? (endpoint += endpoint.includes("?") ? `&page=${page}` : `?page=${page}`) : undefined;

		// Filter items by `price`.
		price ? (endpoint += endpoint.includes("?") ? `&price=${price}` : `?price=${price}`) : undefined;

		// Filter items by `sku`.
		sku ? (endpoint += endpoint.includes("?") ? `&sku=${sku}` : `?sku=${sku}`) : undefined;

		// Filter items by `sku:in`.
		skuIn ? (endpoint += endpoint.includes("?") ? `&sku:in=${skuIn}` : `?sku:in=${skuIn}`) : undefined;

		// Filter items by `sort`.
		sort ? (endpoint += endpoint.includes("?") ? `&sort=${sort}` : `?sort=${sort}`) : undefined;

		// Filter items by `status`.
		status ? (endpoint += endpoint.includes("?") ? `&status=${status}` : `?status=${status}`) : undefined;

		// Filter items by `total_sold`.
		total_sold
			? (endpoint += endpoint.includes("?") ? `&total_sold=${total_sold}` : `?total_sold=${total_sold}`)
			: undefined;

		// Filter items by `type`.
		type ? (endpoint += endpoint.includes("?") ? `&type=${type}` : `?type=${type}`) : undefined;

		// Filter items by `upc`.
		upc ? (endpoint += endpoint.includes("?") ? `&upc=${upc}` : `?upc=${upc}`) : undefined;

		// Filter items by `weight`.
		weight ? (endpoint += endpoint.includes("?") ? `&weight=${weight}` : `?weight=${weight}`) : undefined;

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
