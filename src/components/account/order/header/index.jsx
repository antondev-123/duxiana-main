import { memo } from "react";

/**
 * @description Render memoized order item header component
 * @returns {React.Component} Memoized order item header component
 */
const OrderItemHeader = memo(function MemoizedOrderItemHeader() {
	// Translations
	const orderText = "Order";
	const orderPlacedText = "Order Placed";
	const statusText = "Status";

	return (
		<div className="flex flex-row items-center justify-between px-12 py-3">
			<p className="m-0 text-base ">
				<span className="text-gray-400">{orderText}: </span>
				<span className="font-bold text-black">#1010101010</span>
				<span className="ml-10 text-gray-400">{orderPlacedText}: </span>
				<span className="font-bold text-black">May 21, 2022</span>
			</p>
			<div className="flex flex-row items-center">
				<span className="text-base text-gray-400">{statusText}: </span>
				<div className="ml-2 border px-10 py-2 text-base font-bold text-black">Shipped</div>
			</div>
		</div>
	);
});

export default OrderItemHeader;
