import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Updates a wishlist. Use this endpoint to update existing wishlist items, change the wishlist's name and whether the wishlist is available publicly. To add or delete a wishlist item, see Wishlist Items (https://developer.bigcommerce.com/api-reference/store-management/wishlists/wishlists-items).
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDUzMzE-update-a-wishlist
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { wishlist_id, name, items, customer_id, is_public } = req.query;

		let endpoint = `/v3/wishlists/${wishlist_id}`;

		const body = {
			customer_id,
			is_public,
			name,
			items
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
