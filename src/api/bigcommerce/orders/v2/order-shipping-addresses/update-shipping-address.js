import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Update a shipping address associated with an order.. Note: Updating will NOT trigger the recalculation of shipping cost and tax.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3NTM-update-a-shipping-address
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id, shipping_address_id } = req.query;
		const { first_name, last_name, company, street_1, street_2, city, state, zip, country, phone } = req.body;

		let endpoint = `/v2/orders/${order_id}/shipping-addresses/${shipping_address_id}`;

		const body = {
			first_name,
			last_name,
			company,
			street_1,
			street_2,
			city,
			state,
			zip,
			country,
			phone
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
