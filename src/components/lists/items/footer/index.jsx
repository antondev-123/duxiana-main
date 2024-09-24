import { Link } from "gatsby";
import PropTypes from "prop-types";
import { memo } from "react";
import { convertStringToLowercase } from "../../../../utils/convertValues";

/**
 * @description Render memoized footer list item
 * @param {string} href
 * @param {Object} defaultValue
 * @returns {React.Component} Memoized footer list item
 */
export const FooterListItem = memo(function MemoizedFooterListItem({ href, defaultValue, value }) {
	return (
		<li className="footer__sub-navigation-item" aria-label={defaultValue.label}>
			<Link to={href ? href : defaultValue.href} aria-label={convertStringToLowercase(defaultValue.label)}>
				{value ? value : defaultValue.label}
			</Link>
		</li>
	);
});

FooterListItem.propTypes = {
	href: PropTypes.string,
	defaultValue: PropTypes.object,
	value: PropTypes.string
};
