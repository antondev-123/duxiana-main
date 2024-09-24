import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../components/layouts/common/containers";
import Seo from "../components/seo";

/**
 * @description Render memoized home page
 * @param {Object} location
 * @returns {React.Component} Memoized home page
 */
const HomePage = memo(function MemoizedHomePage({ location }) {
	// Translations
	const pageNameText = "Home";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

HomePage.propTypes = {
	location: PropTypes.object
};

export default HomePage;
