import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Returns the system timestamp at the time of the request. The time resource is useful for validating API authentication details and testing client connections.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDUxNDQ-get-system-timestamp
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		let endpoint = `/v2/time`;

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
