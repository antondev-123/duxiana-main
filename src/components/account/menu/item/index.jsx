import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { memo } from "react";
import { classNames } from "../../../../utils/classnames";

/**
 * @description Render memoized account menu item component
 * @param {string} url
 * @param {string} title
 * @returns {React.Component} Memoized account menu item component
 */
const MenuItem = memo(function MemoizedMenuItem({ url, title }) {
	// Hooks
	const location = useLocation();

	return (
		<Link to={url} className={classNames("text-base", url === location.pathname ? "text-black" : "text-gray-400")}>
			{title}
		</Link>
	);
});

MenuItem.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string
};

export default MenuItem;
