import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized tables page
 * @param {Object} location
 * @returns {React.Component} Memoized tables page
 */
const TablesPage = memo(function MemoizedTablesPage({ location }) {
	// Translations
	const pageNameText = "Tables";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

TablesPage.propTypes = {
	location: PropTypes.object
};

export default TablesPage;
