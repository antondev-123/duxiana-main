import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description Returns a single order status.
 * 0 - "Incomplete"- An incomplete order happens when a shopper reached the payment page, but
 * did not complete the transaction. 1 - "Pending" - Customer started the checkout process, but did not complete it. 2 - "Shipped" - Order has been shipped, but receipt has not been confirmed; seller has. used the Ship Items action.. 3 - "Partially Shipped" - Only some items in the o. pre-order only or other reasons.. 4 - "Refunded"	- Seller has used the Refund action.. 5 - "Cancelled" - Seller has cancelled an order, due to a stock inconsistency or other reasons.. 6 - "Declined" - Seller has marked the order as declined for lack of manual payment, or other reasons.. 7 - "Awaiting Payment"	- Customer has completed checkout process, but payment has yet to be confirmed.. 8 - "Awaiting Pickup" - Order has been pulled, and is awaiting customer pickup from a seller-specified. location.. 9 - "Awaiting Shipment" - Order has been pulled and packaged, and is awaiting collection from a ship. provider.. 10 - "Completed"	- Client has paid for their digital product and th. 11 - "Awaiting Fulfillment" - Customer has completed the checkout process and payment has been confirmed.
 * 12 - "Manual Verification Required" - Order on hold while some aspect needs to be manually confirmed.
 * 13 - "Disputed" - Customer has initiated a dispute resolution process for the PayPal transaction that paid
 * for the order.
 * 14 - "Partially Refunded" - Seller has partially refunded the order.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ3NDE-get-a-single-order-status-by-id
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { order_status_id } = req.query;

		let endpoint = `/v2/order_statuses/${order_status_id}`;

		const result = await BigCommerce({
			endpoint,
			method: "get"
		});

		res.json(result.data.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
