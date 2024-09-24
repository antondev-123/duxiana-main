import { Link } from "gatsby";
import PropTypes from "prop-types";
import { memo } from "react";
import { convertStringToTitleCase } from "../../../../utils/convertValues";

/**
 * @description Render memoized social button component
 * @param {string} title
 * @param {string} icon
 * @param {string} url
 * @returns {React.Component} Memoized social button component
 */
const SocialButton = memo(function MemoizedSocialButton({ title = "", icon, url = "#" }) {
	const Icon = icon;

	return (
		<Link className="flex h-12 w-64 cursor-pointer items-center justify-center gap-x-4 border px-6" to={url}>
			<Icon title={convertStringToTitleCase(title)} />
			<p className="text-base font-bold">{title}</p>
		</Link>
	);
});

SocialButton.propTypes = {
	icon: PropTypes.any,
	title: PropTypes.string,
	url: PropTypes.string
};

export default SocialButton;
