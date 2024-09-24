import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Updates an order. To add a product to an existing order, don't include id in the
 * body. Include `product_options` if adding a product with variants. To update a product in an order, include id in the body. The body should only contain the fields that need to be updated. Those fields that are omitted will not be changed. To remove a product from an order, set that product’s quantity to
 * 0. To learn more about creating or updating orders, see Orders Overview (https://developer.bigcommerce.com/api-docs/orders/orders-api-overview).
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3MzE-update-an-order
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_id } = req.query;
		const {
			products,
			shipping_addresses,
			base_handling_cost,
			base_shipping_cost,
			base_wrapping_cost,
			billing_address,
			channel_id,
			customer_id,
			customer_message,
			date_created,
			default_currency_code,
			discount_amount,
			ebay_order_id,
			external_id,
			external_merchant_id,
			external_source,
			geoip_country,
			geoip_country_iso2,
			handling_cost_ex_tax,
			handling_cost_inc_tax,
			ip_address,
			ip_address_v6,
			is_deleted,
			items_shipped,
			items_total,
			order_is_digital,
			payment_method,
			payment_provider_id,
			refunded_amount,
			shipping_cost_ex_tax,
			shipping_cost_inc_tax,
			staff_notes,
			status_id,
			subtotal_ex_tax,
			subtotal_inc_tax,
			tax_provider_id,
			customer_locale,
			total_ex_tax,
			total_inc_tax,
			wrapping_cost_ex_tax,
			wrapping_cost_inc_tax
		} = req.body;

		let endpoint = `/v2/orders/${order_id}`;

		const body = {
			products,
			shipping_addresses,
			base_handling_cost,
			base_shipping_cost,
			base_wrapping_cost,
			billing_address,
			channel_id,
			customer_id,
			customer_message,
			date_created,
			default_currency_code,
			discount_amount,
			ebay_order_id,
			external_id,
			external_merchant_id,
			external_source,
			geoip_country,
			geoip_country_iso2,
			handling_cost_ex_tax,
			handling_cost_inc_tax,
			ip_address,
			ip_address_v6,
			is_deleted,
			items_shipped,
			items_total,
			order_is_digital,
			payment_method,
			payment_provider_id,
			refunded_amount,
			shipping_cost_ex_tax,
			shipping_cost_inc_tax,
			staff_notes,
			status_id,
			subtotal_ex_tax,
			subtotal_inc_tax,
			tax_provider_id,
			customer_locale,
			total_ex_tax,
			total_inc_tax,
			wrapping_cost_ex_tax,
			wrapping_cost_inc_tax
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
