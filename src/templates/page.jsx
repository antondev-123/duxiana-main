import PropTypes from "prop-types";
import { memo } from "react";
import { TemplatesContainer } from "../components/layouts/common/containers";
import Seo from "../components/seo";

/**
 * @description Render memoized page template
 * @param {Object} pageContext
 * @param {Object} location
 * @returns {React.Component} Memoized page template
 */
const PageTemplate = memo(function MemoizedPageTemplate({ pageContext, location }) {
	// Page Context
	const { meta_title, name, meta_keywords, meta_description, url, search_keywords } = pageContext;

	return (
		<>
			<Seo
				title={meta_title || name}
				slug={url}
				description={meta_description}
				keywords={meta_keywords || search_keywords}
				location={location}
			/>

			<TemplatesContainer>
				<pre>title: {meta_title || name}</pre>
				<pre>slug: {url}</pre>
				<pre>description: {meta_description}</pre>
				<pre>keywords: {(meta_keywords || search_keywords).toString()}</pre>
			</TemplatesContainer>
		</>
	);
});

PageTemplate.propTypes = {
	location: PropTypes.object,
	pageContext: PropTypes.shape({
		meta_description: PropTypes.string,
		meta_keywords: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
		meta_title: PropTypes.string,
		name: PropTypes.string,
		search_keywords: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
		url: PropTypes.string
	})
};

export default PageTemplate;
