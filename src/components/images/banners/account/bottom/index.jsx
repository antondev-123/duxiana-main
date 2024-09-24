import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { memo } from "react";

/**
 * @description Render memoized account banner image
 * @param {string} className
 * @returns {React.Component} Memoized account banner image
 */
const AccountBottomBannerImage = memo(function MemoizedAccountBannerImage({ className }) {
	// Translations
	const imageAltText = "Account Banner Image";

	// Image settings
	const src = "../../../../../images/account-banner-bottom.jpg";
	const alt = imageAltText;

	return <StaticImage src={src} alt={alt} className={className} />;
});

AccountBottomBannerImage.propTypes = {
	classNames: PropTypes.string
};

export default AccountBottomBannerImage;
