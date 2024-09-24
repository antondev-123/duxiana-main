import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";

/**
 * @description Render memoized about us page
 * @param {Object} location
 * @returns {React.Component} Memoized about us page
 */
const AboutUsPage = memo(function MemoizedAboutUsPage({ location }) {
	// Translations
	const pageNameText = "About DUX";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

AboutUsPage.propTypes = {
	location: PropTypes.object
};

export default AboutUsPage;
