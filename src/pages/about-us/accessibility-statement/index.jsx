import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized accessibility statement page
 * @param {Object} location
 * @returns {React.Component} Memoized accessibility statement page
 */
const AccessibilityStatementPage = memo(function MemoizedAccessibilityStatementPage({ location }) {
	// Translations
	const pageNameText = "Accessibility Statement";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

AccessibilityStatementPage.propTypes = {
	location: PropTypes.object
};

export default AccessibilityStatementPage;
