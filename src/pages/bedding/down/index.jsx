import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized down page
 * @param {Object} location
 * @returns {React.Component} Memoized down page
 */
const DownPage = memo(function MemoizedDownPage({ location }) {
	// Translations
	const pageNameText = "DUX Down Collection";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

DownPage.propTypes = {
	location: PropTypes.object
};

export default DownPage;
