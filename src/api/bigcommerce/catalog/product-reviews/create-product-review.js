import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Creates a `Product Review`.
 * @source https://developer.bigcommerce.com/api-reference/538fdc2d1f28b-create-a-product-review
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { product_id } = req.query;
		const { title, text, status, rating, email, name, date_reviewed } = req.body;

		let endpoint = `/v3/catalog/products/${product_id}/reviews`;

		const body = {
			title,
			text,
			status,
			rating,
			email,
			name,
			date_reviewed
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
