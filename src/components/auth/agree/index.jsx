import { Link } from "gatsby";
import PropTypes from "prop-types";
import { memo } from "react";

/**
 * @description Render memoized agree component
 * @param {string} terms
 * @param {string} privacy
 * @returns {React.Component} Memoized agree component
 */
const AgreeSection = memo(function MemoizedAgree({ terms = "#", privacy = "#" }) {
	return (
		<div className="mt-4 flex w-full items-center justify-center">
			<span className="w-4/5 text-center text-sm text-gray-600">
				By signing up, you agree to our company&lsquo;s
				<Link className="mx-1 inline font-bold" to={terms}>
					Terms and Conditions
				</Link>
				and
				<Link className="mx-1 inline font-bold" to={privacy}>
					Privacy Policy
				</Link>
			</span>
		</div>
	);
});

AgreeSection.propTypes = {
	privacy: PropTypes.string,
	terms: PropTypes.string
};

export default AgreeSection;
