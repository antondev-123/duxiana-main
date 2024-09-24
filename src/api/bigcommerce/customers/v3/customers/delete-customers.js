import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Deletes Customers
 * @source https://developer.bigcommerce.com/api-reference/e6bb04315e2a7-delete-customers
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { idIn } = req.query;

		let endpoint = `/v3/customers`;

		// Filter item by `id:in`
		idIn ? (endpoint += endpoint.includes("?") ? `&id:in=${idIn}` : `?id:in=${idIn}`) : undefined;

		const result = await BigCommerce({
			endpoint,
			method: "delete"
		});

		res.json(result.data.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
