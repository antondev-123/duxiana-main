import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";

/**
 * @description Render memoized markets page
 * @param {Object} location
 * @returns {React.Component} Memoized markets page
 */
const MarketsPage = memo(function MemoizedMarketsPage({ location }) {
	// Translations
	const pageNameText = "Markets";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

MarketsPage.propTypes = {
	location: PropTypes.object
};

export default MarketsPage;
