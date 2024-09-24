import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";

/**
 * @description Render memoized bed accessories page
 * @param {Object} location
 * @returns {React.Component} Memoized bed accessories page
 */
const BedAccessoriesPage = memo(function MemoizedBedAccessoriesPage({ location }) {
	// Translations
	const pageNameText = "DUX Bed Accessories";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

BedAccessoriesPage.propTypes = {
	location: PropTypes.object
};

export default BedAccessoriesPage;
