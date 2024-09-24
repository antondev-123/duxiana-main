import { Link } from "gatsby";
import PropTypes from "prop-types";
import { memo } from "react";
import { convertStringToTitleCase } from "../../../../utils/convertValues";

/**
 * @description Render memoized need help item component
 * @param {string} title
 * @param {string} icon
 * @param {string} url
 * @returns {React.Component} Memoized need help item component
 */
const NeedHelpItem = memo(function MemoizedNeedHelpItem({ title = "", icon, url = "#" }) {
	const Icon = icon;

	return (
		<Link className="flex h-12 w-52 cursor-pointer items-center gap-x-4 border-2 border-black px-6" to={url}>
			<Icon title={convertStringToTitleCase(title)} />

			<p className="text-base font-bold">{title}</p>
		</Link>
	);
});

NeedHelpItem.propTypes = {
	icon: PropTypes.any,
	title: PropTypes.string,
	url: PropTypes.string
};

export default NeedHelpItem;
