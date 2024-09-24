import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";

/**
 * @description Render memoized stores page
 * @param {Object} location
 * @returns {React.Component} Memoized stores page
 */
const StoresPage = memo(function MemoizedStoresPage({ location }) {
	// Translations
	const pageNameText = "Stores";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

StoresPage.propTypes = {
	location: PropTypes.object
};

export default StoresPage;
