import PropTypes from "prop-types";
import { memo } from "react";

/**
 * @description Render memoized divider component
 * @param {string} text
 * @returns {React.Component} Memoized divider component
 */
const Divider = memo(function MemoizedDivider({ text }) {
	return (
		<div className="relative my-5 flex h-5 w-full items-center justify-center">
			<span className="w-full border-b" />
			{text && <p className="absolute w-8 bg-white text-center text-sm text-gray-300">{text}</p>}
		</div>
	);
});

Divider.propTypes = {
	text: PropTypes.string
};

export default Divider;
