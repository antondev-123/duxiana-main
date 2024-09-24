import PropTypes from "prop-types";
import { memo } from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../../hooks/useSiteMetadata";
import { convertStringToUppercase } from "../../utils/convertValues";

/**
 * @description Render memoized SEO component
 * @param {Object} location
 * @param {string} slug
 * @param {string} title
 * @param {string} keywords
 * @param {string} description
 * @returns {React.Component} Memoized SEO component
 */
const Seo = memo(function MemoizedSeo({ slug = "", location, title = "", keywords = "", description = "" }) {
	// Get the site metadata
	const {
		description: siteDescription,
		keywords: siteKeywords,
		pageTitle,
		secureUrl,
		imageUrl,
		faviconUrl,
		language,
		firstName,
		lastName
	} = useSiteMetadata();

	// Set the site meta data
	const metaArray = [
		{
			name: "description",
			content: description || siteDescription
		},
		{
			name: "keywords",
			content: keywords || siteKeywords
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:url",
			content: secureUrl + slug || location.pathname
		},
		{
			property: "og:image",
			content: imageUrl
		},
		{
			name: "twitter:card",
			content: "summary"
		},
		{
			name: "twitter:creator",
			content: firstName + " " + lastName
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:description",
			content: description
		}
	];

	return (
		<Helmet
			title={title}
			titleTemplate={title ? `%s | ${convertStringToUppercase(pageTitle)}` : undefined}
			meta={metaArray}
		>
			<html lang={language} />
			<link rel="icon" type="image/ico" href={faviconUrl} />
		</Helmet>
	);
});

Seo.propTypes = {
	description: PropTypes.string,
	keywords: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	location: PropTypes.object,
	slug: PropTypes.string,
	title: PropTypes.string
};

export default Seo;
