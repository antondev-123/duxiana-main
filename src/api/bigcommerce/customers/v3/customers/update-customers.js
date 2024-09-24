import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Updates Customers. Subresource updates are not supported. Up to 10 customers can be updated in one call.
 * @source https://developer.bigcommerce.com/api-reference/595425896c3ec-update-customers
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const {
			email,
			first_name,
			last_name,
			company,
			phone,
			registration_ip_address,
			notes,
			tax_exempt_category,
			customer_group_id,
			id,
			authentication,
			accepts_product_review_abandoned_cart_emails,
			store_credit_amounts,
			form_fields
		} = req.body;

		let endpoint = `/v3/customers`;

		const body = {
			email,
			first_name,
			last_name,
			company,
			phone,
			registration_ip_address,
			notes,
			tax_exempt_category,
			customer_group_id,
			id,
			authentication,
			accepts_product_review_abandoned_cart_emails,
			store_credit_amounts,
			form_fields
		};

		const result = await BigCommerce({
			endpoint,
			method: "put",
			body
		});

		res.json(result.data.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
