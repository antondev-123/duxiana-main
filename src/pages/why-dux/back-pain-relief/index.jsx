import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized back pain relief page
 * @param {Object} location
 * @returns {React.Component} Memoized back pain relief page
 */
const BackPainReliefPage = memo(function MemoizedBackPainReliefPage({ location }) {
	// Translations
	const pageNameText = "Back pain relief";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

BackPainReliefPage.propTypes = {
	location: PropTypes.object
};

export default BackPainReliefPage;
