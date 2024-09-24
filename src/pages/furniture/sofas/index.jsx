import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized sofas page
 * @param {Object} location
 * @returns {React.Component} Memoized sofas page
 */
const SofasPage = memo(function MemoizedSofasPage({ location }) {
	// Translations
	const pageNameText = "Sofas";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

SofasPage.propTypes = {
	location: PropTypes.object
};

export default SofasPage;
