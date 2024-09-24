import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized headboards page
 * @param {Object} location
 * @returns {React.Component} Memoized headboards page
 */
const HeadboardsPage = memo(function MemoizedHeadboardsPage({ location }) {
	// Translations
	const pageNameText = "DUX Headboards";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

HeadboardsPage.propTypes = {
	location: PropTypes.object
};

export default HeadboardsPage;
