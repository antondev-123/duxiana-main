import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";

/**
 * @description Render memoized news event page
 * @param {Object} location
 * @returns {React.Component} Memoized news event page
 */
const NewsEventPage = memo(function MemoizedNewsEventPage({ location }) {
	// Translations
	const pageNameText = "News & Events";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

NewsEventPage.propTypes = {
	location: PropTypes.object
};

export default NewsEventPage;
