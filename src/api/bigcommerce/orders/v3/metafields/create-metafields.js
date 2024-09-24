import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Creates an order `Metafield`. The maxiumum number of metafields is 50 per order.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ4MzI-create-metafields
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id, permission_set, namespace, key, value, description, resource_type, resource_id } = req.body;

		let endpoint = `/v3/orders/${order_id}/metafields`;

		const body = {
			permission_set,
			namespace,
			key,
			value,
			description,
			resource_type,
			resource_id
		};

		const result = await BigCommerce({
			endpoint,
			method: "post",
			body
		});

		res.json(result.data.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
