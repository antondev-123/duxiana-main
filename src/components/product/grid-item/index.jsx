import PropTypes from "prop-types";
import { memo } from "react";
import ProductColorSwatch from "../color-swatch";

/**
 * @description Render memoized product grid item component
 * @param {Object} product
 * @returns {React.Component} Memoized product grid item component
 */
const ProductGridItem = memo(function MemoizedProductGridItem({ product }) {
	// Translations
	const viewNowText = "View Now";

	return (
		<div className="flex flex-1 flex-col">
			<img className="aspect-[1.2] w-full" alt={product?.title} />
			<div className="flex flex-col p-4">
				<h3 className="m-0 text-sm uppercase text-black">SATEEN SHEET SET</h3>
				<p className="m-0 mt-1 text-sm text-black">Starting at $500</p>
				<ProductColorSwatch />

				<button className="mt-2 h-8 w-20 border text-sm">{viewNowText}</button>
			</div>
		</div>
	);
});

ProductGridItem.propTypes = {
	product: PropTypes.shape({
		title: PropTypes.string
	})
};

export default ProductGridItem;
