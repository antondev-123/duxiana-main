import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../components/layouts/common/containers";
import Seo from "../components/seo";

/**
 * @description Render memoized 404 Error page
 * @param {Object} location
 * @returns {React.Component} Memoized 404 Error page
 */
const NotFoundPage = memo(function MemoizedNotFoundPage({ location }) {
	// Translations
	const pageNameText = "404 Error";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

NotFoundPage.propTypes = {
	location: PropTypes.object
};

export default NotFoundPage;
