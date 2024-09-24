import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized chairs page
 * @param {Object} location
 * @returns {React.Component} Memoized chairs page
 */
const ChairsPage = memo(function MemoizedChairsPage({ location }) {
	// Translations
	const pageNameText = "Chairs";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

ChairsPage.propTypes = {
	location: PropTypes.object
};

export default ChairsPage;
