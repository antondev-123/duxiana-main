import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Adds a billing address to an existing `Checkout`. Required fields: `country_code`
 * @source https://developer.bigcommerce.com/api-reference/b3A6MjMxMzYxNg-add-checkout-billing-address
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { checkout_id } = req.query;
		const {
			first_name,
			last_name,
			email,
			company,
			address1,
			address2,
			city,
			state_or_province,
			state_or_province_code,
			country_code,
			postal_code,
			phone,
			custom_fields
		} = req.body;

		let endpoint = `/v3/checkouts/${checkout_id}`;

		const body = {
			first_name,
			last_name,
			email,
			company,
			address1,
			address2,
			city,
			state_or_province,
			state_or_province_code,
			country_code,
			postal_code,
			phone,
			custom_fields
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
