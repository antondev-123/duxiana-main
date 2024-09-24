import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized clothing page
 * @param {Object} location
 * @returns {React.Component} Memoized clothing page
 */
const ClothingPage = memo(function MemoizedClothingPage({ location }) {
	// Translations
	const pageNameText = "Clothing";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

ClothingPage.propTypes = {
	location: PropTypes.object
};

export default ClothingPage;
