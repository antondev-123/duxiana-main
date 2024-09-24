import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Returns a list of wishlists. Optional filter parameters can be passed in.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDUzMjg-get-all-wishlists
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { customer_id, limit, page } = req.query;

		let endpoint = `/v3/wishlists`;

		// All wishlists relating to the customer
		customer_id
			? (endpoint += endpoint.includes("?") ? `&customer_id=${customer_id}` : `?customer_id=${customer_id}`)
			: undefined;

		// The numbers of items to return per page. Default is 50 and maximum is 250
		limit ? (endpoint += endpoint.includes("?") ? `&limit=${limit}` : `?limit=${limit}`) : undefined;

		// The page number of results per page. 1 is the default and starts from record 0
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
