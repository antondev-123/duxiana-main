import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Returns a list of Channels.. Will always return the default BigCommerce storefront with an ID of `1`. This storefront is created by default when you provision a BigCommerce store.
 * @source https://developer.bigcommerce.com/api-reference/d2298071793d6-get-all-channels
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const {
			available,
			date_created,
			date_createdMax,
			date_createdMin,
			date_modified,
			date_modifiedMax,
			date_modifiedMin,
			include,
			limit,
			page,
			platformIn,
			statusIn,
			typeIn
		} = req.query;

		let endpoint = `/v3/channels`;

		// Filter items by `available`.
		available
			? (endpoint += endpoint.includes("?") ? `&available=${available}` : `?available=${available}`)
			: undefined;

		// Filter items by `date_created`.
		date_created
			? (endpoint += endpoint.includes("?") ? `&date_created=${date_created}` : `?date_created=${date_created}`)
			: undefined;

		// Filter items by `date_created:max`.
		date_createdMax
			? (endpoint += endpoint.includes("?")
					? `&date_created:max=${date_createdMax}`
					: `?date_created:max=${date_createdMax}`)
			: undefined;

		// Filter items by `date_created:min`.
		date_createdMin
			? (endpoint += endpoint.includes("?")
					? `&date_created:min=${date_createdMin}`
					: `?date_created:min=${date_createdMin}`)
			: undefined;

		// Filter items by `date_modified`.
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

		// Filter items by `include`.
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

		// Filter items by `limit`.
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// Filter items by `page`.
		page ? (endpoint += endpoint.includes("?") ? `&page=${page}` : `?page=${page}`) : undefined;

		// Filter items by `platform:in`.
		platformIn
			? (endpoint += endpoint.includes("?") ? `&platform:in=${platformIn}` : `?platform:in=${platformIn}`)
			: undefined;

		// Filter items by `status:in`.
		statusIn ? (endpoint += endpoint.includes("?") ? `&status:in=${statusIn}` : `?status:in=${statusIn}`) : undefined;

		// Filter items by `type:in`.
		typeIn ? (endpoint += endpoint.includes("?") ? `&type:in=${typeIn}` : `?type:in=${typeIn}`) : undefined;

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
