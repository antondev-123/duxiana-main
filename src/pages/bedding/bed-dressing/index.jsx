import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized bed dressing page
 * @param {Object} location
 * @returns {React.Component} Memoized bed dressing page
 */
const BedDressingPage = memo(function MemoizedBedDressingPage({ location }) {
	// Translations
	const pageNameText = "Bed Dressing";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

BedDressingPage.propTypes = {
	location: PropTypes.object
};

export default BedDressingPage;
