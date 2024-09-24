import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Removes an existing consignment from a checkout.
 * Removing the last consigment will remove the Cart from the customer it is assigned to. Create
 * a new redirect url for the customer to access it again.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDQ0Nzg-delete-checkout-consignment
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { checkout_id, consignment_id } = req.query;

		let endpoint = `/v3/checkouts/${checkout_id}/consignments/${consignment_id}`;

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
