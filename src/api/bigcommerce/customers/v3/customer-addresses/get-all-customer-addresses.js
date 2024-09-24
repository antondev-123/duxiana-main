import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Returns a list of Customer Addresses. Optional filter parameters can be passed in.
 * @source https://developer.bigcommerce.com/api-reference/615222bb68851-get-all-customer-addresses
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { companyIn, idIn, include, limit, nameIn, page } = req.query;

		let endpoint = `/v3/customers/addresses`;

		// Filter item by `company:in`
		companyIn
			? (endpoint += endpoint.includes("?") ? `&company:in=${companyIn}` : `?company:in=${companyIn}`)
			: undefined;

		// Filter item by `customer_id:in`
		idIn ? (endpoint += endpoint.includes("?") ? `&id:in=${idIn}` : `?id:in=${idIn}`) : undefined;

		// Filter item by `include`
		include ? (endpoint += endpoint.includes("?") ? `&include=${include}` : `?include=${include}`) : undefined;

		// Filter item by `limit`
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// Filter item by `name:in`
		nameIn ? (endpoint += endpoint.includes("?") ? `&name:in=${nameIn}` : `?name:in=${nameIn}`) : undefined;

		// Filter item by `page`
		page ? (endpoint += endpoint.includes("?") ? `&page=${page}` : `?page=${page}`) : undefined;

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
