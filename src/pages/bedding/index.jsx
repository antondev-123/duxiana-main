import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";

/**
 * @description Render memoized bedding page
 * @param {Object} location
 * @returns {React.Component} Memoized bedding page
 */
const BeddingPage = memo(function MemoizedBeddingPage({ location }) {
	// Translations
	const pageNameText = "DUX Bedding";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

BeddingPage.propTypes = {
	location: PropTypes.object
};

export default BeddingPage;
