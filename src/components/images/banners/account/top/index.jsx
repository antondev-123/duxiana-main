import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { memo } from "react";

/**
 * @description Render memoized account banner image component
 * @param {string} classNames
 * @returns {React.Component} Memoized account banner image component
 */
const AccountTopBannerImage = memo(function MemoizedAccountBannerImage({ classNames }) {
	// Translations
	const imageAltText = "Account Banner Image";

	// Image settings
	const src = "../../../../../images/account-banner.jpg";
	const alt = imageAltText;

	return <StaticImage src={src} alt={alt} className={classNames} />;
});

AccountTopBannerImage.propTypes = {
	classNames: PropTypes.string
};

export default AccountTopBannerImage;
