import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized easy chairs page
 * @param {Object} location
 * @returns {React.Component} Memoized easy chairs page
 */
const EasyChairsPage = memo(function MemoizedEasyChairsPage({ location }) {
	// Translations
	const pageNameText = "Easy Chairs";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

EasyChairsPage.propTypes = {
	location: PropTypes.object
};

export default EasyChairsPage;
