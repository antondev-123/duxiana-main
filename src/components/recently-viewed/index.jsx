import { memo } from "react";
import ProductGridItem from "../product/grid-item";

/**
 * @description Render memoized recently viewed component
 * @returns {React.Component} Memoized recently viewed component
 */
const RecentlyViewedProducts = memo(function MemoizedRecentlyViewedProducts() {
	// Translations
	const title = "Recently Viewed";

	// Variables
	const products = [1, 2, 3, 4];

	return (
		<div className="my-8 flex flex-col">
			<h2 className="font-brownLLWeb text-lg normal-case">{title}</h2>
			<div className="flex flex-row gap-3">
				{products.slice(0, 4).map((item, index) => {
					return <ProductGridItem key={index} />;
				})}
			</div>
		</div>
	);
});

export default RecentlyViewedProducts;
