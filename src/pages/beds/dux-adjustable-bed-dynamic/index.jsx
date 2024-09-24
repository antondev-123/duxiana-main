import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized dux dynamic page
 * @param {Object} location
 * @returns {React.Component} Memoized dux dynamic page
 */
const DuxDynamicPage = memo(function MemoizedDuxDynamicPage({ location }) {
	// Translations
	const pageNameText = "DUX Dynamic Adjustable Bed | DUX Beds";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

DuxDynamicPage.propTypes = {
	location: PropTypes.object
};

export default DuxDynamicPage;
