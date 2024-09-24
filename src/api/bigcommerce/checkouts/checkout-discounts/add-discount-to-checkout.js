import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Adds a discount to an existing checkout. This discount only applies to line_items. When you call this API, you clear out all
 * existing discounts applied to line items, including product and order-based discounts.. This endpoint splits the discount between line items based on the item value. Required Fields: `discounted_amount`
 * @source https://developer.bigcommerce.com/api-reference/b3A6NTIxNzAwMTI-add-discount-to-checkout
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { checkout_id } = req.query;
		const { cart } = req.body;

		let endpoint = `/v3/checkouts/${checkout_id}/discounts`;

		const body = {
			cart
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
