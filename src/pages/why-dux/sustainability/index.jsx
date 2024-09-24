import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized sustainability page
 * @param {Object} location
 * @returns {React.Component} Memoized sustainability page
 */
const SustainabilityPage = memo(function MemoizedSustainabilityPage({ location }) {
	// Translations
	const pageNameText = "Sustainability";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

SustainabilityPage.propTypes = {
	location: PropTypes.object
};

export default SustainabilityPage;
