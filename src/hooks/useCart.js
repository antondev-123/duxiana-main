import { useMemo, useState } from "react";
import BigCommerce from "../libs/bigcommerce";

/**
 * @description Get the cart ID
 * @returns {string} Cart ID
 */
export const useGetCartId = () => {
	const [cartId, setCartId] = useState(null);

	useMemo(() => {
		setCartId(localStorage.getItem("cartId"));
	}, [cartId]);

	return cartId;
};

/**
 * @description Set cart ID
 * @param {string} cartId
 * @returns {void}
 */
export const useSetCartId = (cartId) => {
	useMemo(() => {
		if (cartId) {
			localStorage.setItem("cartId", cartId);
		} else {
			localStorage.removeItem("cartId");
		}
	}, [cartId]);

	return;
};

/**
 * @description Get cart item number
 * @param {Object} line_items
 * @returns {number} Cart item numbers
 */
export const useGetCartItemNumber = (line_items) => {
	const [numberItems, setNumberItems] = useState(0);

	useMemo(() => {
		let initialNumberItems =
			line_items?.physical_items?.length ||
			0 + line_items?.digital_items?.length ||
			0 + line_items?.custom_items?.length ||
			0 + line_items?.gift_certificates?.length ||
			0;

		setNumberItems(initialNumberItems);
	}, [line_items]);

	return numberItems;
};

/**
 * @description Fetch the checkout information from the server
 * @param {string} checkoutId
 * @returns {Promise<void>} The promise of the fetch
 */
export const useFetchCheckout = async (checkoutId) => {
	let result = BigCommerce.get(
		`/api/get-checkout?checkout_id=${checkoutId}&include=cart.line_items.physical_items.options,cart.line_items.digital_items.options,consignments.available_shipping_options,promotions.banners`
	);
};
