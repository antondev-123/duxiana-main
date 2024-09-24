import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized legs page
 * @param {Object} location
 * @returns {React.Component} Memoized legs page
 */
const LegsPage = memo(function MemoizedLegsPage({ location }) {
	// Translations
	const pageNameText = "DUX 1001 | DUX Beds";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

LegsPage.propTypes = {
	location: PropTypes.object
};

export default LegsPage;
