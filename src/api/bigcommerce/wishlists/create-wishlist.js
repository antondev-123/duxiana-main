import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Creates a wishlist and wishlist item. More than one item can be added in the POST. Required Fields: `name`, `customer_id`
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { customer_id, is_public, name, items } = req.body;

		let endpoint = `/v3/wishlists`;

		const body = {
			customer_id,
			is_public,
			name,
			items
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
