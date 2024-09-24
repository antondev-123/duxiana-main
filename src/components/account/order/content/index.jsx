import { memo } from "react";
import BagIcon from "../../../../images/icon-bag.inline.svg";
import { convertStringToTitleCase } from "../../../../utils/convertValues";
import OrderProductItem from "../product-item";
import SideCrumb from "../side-crumb";

/**
 * @description Render memoized order item content component
 * @returns {React.Component} Memoized order item content component
 */
const OrderItemContent = memo(function MemoizedOrderItemContent() {
	// Translations
	const totalText = "Total";
	const bagIconText = "Bag Icon";

	return (
		<div className="flex flex-col border-t px-8">
			<div className="flex flex-row items-center justify-between border-b py-3">
				<div className="flex items-center">
					<div className="flex h-10 w-10 items-center justify-center border border-gray-400">
						<BagIcon className="h-5 w-5" title={convertStringToTitleCase(bagIconText)} />
					</div>
					<h2 className="m-0 ml-4 text-lg font-bold normal-case">2 Products</h2>
				</div>
				<p className="m-0 text-lg text-gray-400">
					{totalText}: <span className="font-bold text-black">$16,000.00</span>
				</p>
			</div>
			<div className="flex flex-row">
				<SideCrumb />

				<div className="flex flex-1 flex-col px-3">
					<OrderProductItem />
					<OrderProductItem />
				</div>
			</div>
		</div>
	);
});

export default OrderItemContent;
