import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized innovation page
 * @param {Object} location
 * @returns {React.Component} Memoized innovation page
 */
const InnovationPage = memo(function MemoizedInnovationPage({ location }) {
	// Translations
	const pageNameText = "The DUX Innovation";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

InnovationPage.propTypes = {
	location: PropTypes.object
};

export default InnovationPage;
