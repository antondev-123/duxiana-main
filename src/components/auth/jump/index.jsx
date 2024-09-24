import { Link } from "gatsby";
import PropTypes from "prop-types";
import { memo } from "react";
import UserIcon from "../../../images/icon-user.inline.svg";
import { convertStringToTitleCase } from "../../../utils/convertValues";

/**
 * @description Render memoized jump component
 * @param {string} title
 * @param {string} content
 * @param {string} label
 * @param {string} url
 * @returns {React.Component} Memoized jump component
 */
const JumpSection = memo(function MemoizedJump({ title = "", content = "", label = "", url = "#" }) {
	// Translations
	const userIconText = "User Icon";

	return (
		<div className="flex h-fit w-80 basis-auto flex-col border p-8">
			<div className="flex h-10 w-10 items-center justify-center border">
				<UserIcon className="h-6 w-6" alt={convertStringToTitleCase(userIconText)} />
			</div>
			<h2 className="mt-4 text-lg font-bold normal-case">{title}</h2>
			<p className="mt-2 text-sm text-gray-700">{content}</p>

			<Link to={url} className="mt-10 flex h-12 w-full items-center justify-center border text-black">
				{label}
			</Link>
		</div>
	);
});

JumpSection.propTypes = {
	label: PropTypes.string,
	content: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string
};

export default JumpSection;
