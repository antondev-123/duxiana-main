import { memo, useState } from "react";
import { classNames } from "../../../utils/classnames";

/**
 * @description Render memoized product color swatch component
 * @returns {React.Component} Memoized product color swatch component
 */
const ProductColorSwatch = memo(function MemoizedProductColorSwatch() {
	const [selected, setSelected] = useState(0);

	// Variables
	const colors = ["#ff0000", "#ff0ff0", "#ffff00", "#1fee00"];

	return (
		<div className="my-2 flex flex-row gap-2">
			{colors.map((item, index) => {
				return (
					<button
						className={classNames("h-5 w-5 rounded-full", selected == index && "border border-gray-500")}
						style={{ backgroundColor: item }}
						key={index}
						onClick={() => setSelected(index)}
					></button>
				);
			})}
		</div>
	);
});

export default ProductColorSwatch;
