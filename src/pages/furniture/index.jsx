import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";

/**
 * @description Render memoized furniture page
 * @param {Object} location
 * @returns {React.Component} Memoized furniture page
 */
const FurniturePage = memo(function MemoizedFurniturePage({ location }) {
	// Translations
	const pageNameText = "DUX Furniture | Iconic Swedish Design";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

FurniturePage.propTypes = {
	location: PropTypes.object
};

export default FurniturePage;
