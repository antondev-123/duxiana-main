import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Adds a Coupon Code to `Checkout`.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ0Nzk-add-coupon-to-checkout
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { checkout_id } = req.query;
		const { coupon_code } = req.body;

		let endpoint = `/v3/checkouts/${checkout_id}/coupons`;

		const body = {
			coupon_code
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
