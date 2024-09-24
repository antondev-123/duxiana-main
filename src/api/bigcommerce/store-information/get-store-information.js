import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Returns metadata about a store.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDUxNDM-get-store-information
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		let endpoint = `/v2/store`;

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
