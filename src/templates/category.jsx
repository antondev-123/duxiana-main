import PropTypes from "prop-types";
import { memo } from "react";
import { TemplatesContainer } from "../components/layouts/common/containers";
import Seo from "../components/seo";

/**
 * @description Render memoized category template
 * @param {Object} pageContext
 * @param {Object} location
 * @returns {React.Component} Memoized category template
 */
const CategoryTemplate = memo(function MemoizedCategoryTemplate({ pageContext, location }) {
	// Page Context
	const {
		page_title,
		name,
		meta_keywords,
		search_keywords,
		meta_description,
		custom_url: { url }
	} = pageContext;

	return (
		<>
			<Seo
				title={page_title || name}
				slug={url}
				description={meta_description}
				keywords={meta_keywords || search_keywords}
				location={location}
			/>

			<TemplatesContainer>
				<pre>title: {page_title || name}</pre>
				<pre>slug: {url}</pre>
				<pre>description: {meta_description}</pre>
				<pre>keywords: {(meta_keywords || search_keywords).toString()}</pre>
			</TemplatesContainer>
		</>
	);
});

CategoryTemplate.propTypes = {
	location: PropTypes.object,
	pageContext: PropTypes.shape({
		meta_description: PropTypes.string,
		meta_keywords: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
		name: PropTypes.string,
		page_title: PropTypes.string,
		search_keywords: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
		slug: PropTypes.string
	})
};

export default CategoryTemplate;
