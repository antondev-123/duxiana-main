import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../components/layouts/common/containers";
import Seo from "../components/seo";

/**
 * @description Render memoized 500 Error page
 * @param {Object} location
 * @returns {React.Component} Memoized 500 Error page
 */
const ServerErrorPage = memo(function MemoizedServerErrorPage({ location }) {
	// Translations
	const pageNameText = "500 Error";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

ServerErrorPage.propTypes = {
	location: PropTypes.object
};

export default ServerErrorPage;
