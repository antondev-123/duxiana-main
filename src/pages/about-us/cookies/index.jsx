import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized cookies page
 * @param {Object} location
 * @returns {React.Component} Memoized cookies page
 */
const CookiesPage = memo(function MemoizedCookiesPage({ location }) {
	// Translations
	const pageNameText = "Cookies";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

CookiesPage.propTypes = {
	location: PropTypes.object
};

export default CookiesPage;
