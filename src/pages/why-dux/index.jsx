import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";

/**
 * @description Render memoized why dux page
 * @param {Object} location
 * @returns {React.Component} Memoized why dux page
 */
const WhyDuxPage = memo(function MemoizedWhyDuxPage({ location }) {
	// Translations
	const pageNameText = "Why DUX | All the benifits of The DUX Bed";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

WhyDuxPage.propTypes = {
	location: PropTypes.object
};

export default WhyDuxPage;
