import PropTypes from "prop-types";
import { memo } from "react";
import { TemplatesContainer } from "../components/layouts/common/containers";
import Seo from "../components/seo";

/**
 * @description Render memoized product template
 * @param {Object} pageContext
 * @param {Object} location
 * @returns {React.Component} Memoized product template
 */
const ProductTemplate = memo(function MemoizedProductTemplate({ pageContext, location }) {
	// Page Context
	const {
		page_title,
		name,
		meta_keywords,
		search_keywords,
		meta_description,
		description,
		open_graph_description,
		open_graph_title,
		custom_url: { url }
	} = pageContext;

	return (
		<>
			<Seo
				title={page_title || open_graph_title || name}
				slug={url}
				description={meta_description || open_graph_description || description}
				keywords={meta_keywords || search_keywords}
				location={location}
			/>

			<TemplatesContainer>
				<pre>title: {page_title || open_graph_title || name}</pre>
				<pre>slug: {url}</pre>
				<pre>description: {meta_description || open_graph_description || description}</pre>
				<pre>keywords: {(meta_keywords || search_keywords).toString()}</pre>
			</TemplatesContainer>
		</>
	);
});

ProductTemplate.propTypes = {
	location: PropTypes.object,
	pageContext: PropTypes.shape({
		description: PropTypes.string,
		meta_description: PropTypes.string,
		meta_keywords: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
		name: PropTypes.string,
		open_graph_description: PropTypes.string,
		open_graph_title: PropTypes.string,
		page_title: PropTypes.string,
		search_keywords: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
		slug: PropTypes.string
	})
};

export default ProductTemplate;
