import { memo } from "react";
import OrderItemContent from "./content";
import OrderItemHeader from "./header";

/**
 * @description Render memoized order item component
 * @returns {React.Component} Memoized order item component
 */
const OrderItem = memo(function MemoizedOrderItem() {
	return (
		<div className="mb-5 flex flex-col border">
			<OrderItemHeader />
			<OrderItemContent />
		</div>
	);
});

export default OrderItem;
