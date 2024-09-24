import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";

/**
 * @description Render memoized dux beds page
 * @param {Object} location
 * @returns {React.Component} Memoized dux beds page
 */
const DuxBedsPage = memo(function MemoizedDuxBedsPage({ location }) {
	// Translations
	const pageNameText = "DUX Beds | More than just a bed";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

DuxBedsPage.propTypes = {
	location: PropTypes.object
};

export default DuxBedsPage;
