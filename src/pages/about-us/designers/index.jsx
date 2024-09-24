import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized designers page
 * @param {Object} location
 * @returns {React.Component} Memoized designers page
 */
const DesignersPage = memo(function MemoizedDesignersPage({ location }) {
	// Translations
	const pageNameText = "Designers";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

DesignersPage.propTypes = {
	location: PropTypes.object
};

export default DesignersPage;
