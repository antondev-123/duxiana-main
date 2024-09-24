import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized top pads page
 * @param {Object} location
 * @returns {React.Component} Memoized top pads page
 */
const TopPadsPage = memo(function MemoizedTopPadsPage({ location }) {
	// Translations
	const pageNameText = "Top Pads";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

TopPadsPage.propTypes = {
	location: PropTypes.object
};

export default TopPadsPage;
