import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Creates Customers. Multiple customers can be created in one call.
 * @source https://developer.bigcommerce.com/api-reference/1cea64e1d698e-create-customers
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
			notes,
			tax_exempt_category,
			customer_group_id,
			addresses,
			attributes,
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
			notes,
			tax_exempt_category,
			customer_group_id,
			addresses,
			attributes,
			authentication,
			accepts_product_review_abandoned_cart_emails,
			store_credit_amounts,
			form_fields
		};

		// console.log('body:::', body)
		

		const result = await BigCommerce({
			endpoint,
			method: "post",
			body
		});

		// console.log('result::', result)

		res.json(result.data.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
