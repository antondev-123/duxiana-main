import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Gets a `Metafield`, by `order_id`
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ4MzM-get-a-metafield
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id, metafield_id } = req.query;

		let endpoint = `/v3/orders/${order_id}/metafields/${metafield_id}`;

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
