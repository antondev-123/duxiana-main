import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";

/**
 * @description Render memoized professionals page
 * @param {Object} location
 * @returns {React.Component} Memoized professionals page
 */
const ProfessionalsPage = memo(function MemoizedProfessionalsPage({ location }) {
	// Translations
	const pageNameText = "Become a partner | Professionals";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

ProfessionalsPage.propTypes = {
	location: PropTypes.object
};

export default ProfessionalsPage;
