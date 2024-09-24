import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Deletes a cart. Once a cart has been deleted it can not be recovered.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQyMDA-delete-a-cart
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { cart_id } = req.query;

		let endpoint = `/v3/carts/${cart_id}`;

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
