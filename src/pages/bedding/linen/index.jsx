import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized linen page
 * @param {Object} location
 * @returns {React.Component} Memoized linen page
 */
const LinenPage = memo(function MemoizedLinenPage({ location }) {
	// Translations
	const pageNameText = "DUX Linen Collection";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

LinenPage.propTypes = {
	location: PropTypes.object
};

export default LinenPage;
