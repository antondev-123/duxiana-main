import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";

/**
 * @description Render memoized try at hotel page
 * @param {Object} location
 * @returns {React.Component} Memoized try at hotel page
 */
const TryAtHotelPage = memo(function MemoizedTryAtHotelPage({ location }) {
	// Translations
	const pageNameText = "Try The DUX Bed at a hotel";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

TryAtHotelPage.propTypes = {
	location: PropTypes.object
};

export default TryAtHotelPage;
