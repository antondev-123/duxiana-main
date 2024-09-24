import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Deletes a `Coupon Code` from `Checkout`.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ0ODA-delete-checkout-coupon
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { checkout_id, coupon_code } = req.query;

		let endpoint = `/v3/checkouts/${checkout_id}/coupons/${coupon_code}`;

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
