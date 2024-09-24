import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized dux axion page
 * @param {Object} location
 * @returns {React.Component} Memoized dux axion page
 */
const DuxAxionPage = memo(function MemoizedDuxAxionPage({ location }) {
	// Translations
	const pageNameText = "DUX Axion Adjustable Bed | DUX Beds";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

DuxAxionPage.propTypes = {
	location: PropTypes.object
};

export default DuxAxionPage;
