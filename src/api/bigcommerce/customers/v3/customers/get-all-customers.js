import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Returns a list of Customers. Optional filter parameters can be passed in.
 * @source https://developer.bigcommerce.com/api-reference/761ec193054b6-get-all-customers
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const {
			companyIn,
			customer_group_idIn,
			date_createdIn,
			date_createdMax,
			date_createdMin,
			date_modified,
			date_modifiedMax,
			date_modifiedMin,
			emailIn,
			idIn,
			include,
			limit,
			nameIn,
			nameLike,
			page,
			registration_ip_addressIn,
			sort
		} = req.query;


		// console.log('body----2', req.query.emailIn, emailIn)

		let endpoint = `/v3/customers`;


		// Filter item by `company:in`
		companyIn
			? (endpoint += endpoint.includes("?") ? `&company:in=${companyIn}` : `?company:in=${companyIn}`)
			: undefined;

		// Filter item by `customer_group_id:in`
		customer_group_idIn
			? (endpoint += endpoint.includes("?")
				? `&customer_group_id:in=${customer_group_idIn}`
				: `?customer_group_id:in=${customer_group_idIn}`)
			: undefined;

		// Filter item by `date_created:in`
		date_createdIn
			? (endpoint += endpoint.includes("?")
				? `&date_created:in=${date_createdIn}`
				: `?date_created:in=${date_createdIn}`)
			: undefined;

		// Filter item by `date_created:max`
		date_createdMax
			? (endpoint += endpoint.includes("?")
				? `&date_created:max=${date_createdMax}`
				: `?date_created:max=${date_createdMax}`)
			: undefined;

		// Filter item by `date_created:min`
		date_createdMin
			? (endpoint += endpoint.includes("?")
				? `&date_created:min=${date_createdMin}`
				: `?date_created:min=${date_createdMin}`)
			: undefined;

		// Filter item by `date_modified:in`
		date_modified
			? (endpoint += endpoint.includes("?")
				? `&date_modified:in=${date_modified}`
				: `?date_modified:in=${date_modified}`)
			: undefined;

		// Filter item by `date_modified:max`
		date_modifiedMax
			? (endpoint += endpoint.includes("?")
				? `&date_modified:max=${date_modifiedMax}`
				: `?date_modified:max=${date_modifiedMax}`)
			: undefined;

		// Filter item by `date_modified:min`
		date_modifiedMin
			? (endpoint += endpoint.includes("?")
				? `&date_modified:min=${date_modifiedMin}`
				: `?date_modified:min=${date_modifiedMin}`)
			: undefined;

		// Filter item by `email:in`



		emailIn ? (endpoint += endpoint.includes("?") ? `&email:in=${emailIn}` : `?email:in=${emailIn}`) : undefined;

		// Filter item by `id:in`
		idIn ? (endpoint += endpoint.includes("?") ? `&id:in=${idIn}` : `?id:in=${idIn}`) : undefined;

		// Filter item by `include`
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

		// Filter item by `limit`
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// Filter item by `name:in`
		nameIn ? (endpoint += endpoint.includes("?") ? `&name:in=${nameIn}` : `?name:in=${nameIn}`) : undefined;

		// Filter item by `name:like`
		nameLike ? (endpoint += endpoint.includes("?") ? `&name:like=${nameLike}` : `?name:like=${nameLike}`) : undefined;

		// Filter item by `registration_ip_address:in`
		registration_ip_addressIn
			? (endpoint += endpoint.includes("?")
				? `&registration_ip_address:in=${registration_ip_addressIn}`
				: `?registration_ip_address:in=${registration_ip_addressIn}`)
			: undefined;

		// Filter item by `sort`
		sort ? (endpoint += endpoint.includes("?") ? `&sort=${sort}` : `?sort=${sort}`) : undefined;

		// Filter item by `page`
		page ? (endpoint += endpoint.includes("?") ? `&page=${page}` : `?page=${page}`) : undefined;

		// console.log('endpoint--', endpoint)
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
