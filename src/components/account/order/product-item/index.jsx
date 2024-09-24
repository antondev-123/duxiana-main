import { memo } from "react";

/**
 * @description Render memoized order product item component
 * @returns {React.Component} Memoized order product item component
 */
const OrderProductItem = memo(function MemoizedOrderProductItem() {
	// Translations
	const sizeText = "Size";
	const totalText = "Total";
	const qtyText = "QTY";

	return (
		<div className="my-3 flex justify-between">
			<div className="flex gap-4">
				<img className="h-28 w-28 border" alt="imagdde" />
				<div className="flex flex-col gap-1">
					<h3 className="m-0 text-base font-bold">Dux 1001</h3>
					<p className="m-0 text-base  text-gray-400">{sizeText}: KING</p>
					<p className="m-0 text-base  text-gray-400">
						{qtyText}:
						<span className="ml-1 border px-2">
							<span className="font-bold text-black">1</span>
							<span className="ml-1">X</span>
						</span>
					</p>
				</div>
			</div>
			<p className="m-0 text-base text-gray-400">
				{totalText}: <span className="font-bold text-black">$8,000.00</span>
			</p>
		</div>
	);
});

export default OrderProductItem;
