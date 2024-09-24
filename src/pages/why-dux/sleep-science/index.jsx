import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized sleep science page
 * @param {Object} location
 * @returns {React.Component} Memoized sleep science page
 */
const SleepSciencePage = memo(function MemoizedSleepSciencePage({ location }) {
	// Translations
	const pageNameText = "Sleep science | Deeper sleep in The DUX Bed";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

SleepSciencePage.propTypes = {
	location: PropTypes.object
};

export default SleepSciencePage;
