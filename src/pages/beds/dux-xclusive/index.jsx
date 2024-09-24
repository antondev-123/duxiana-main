import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized dux xclusive page
 * @param {Object} location
 * @returns {React.Component} Memoized dux xclusive page
 */
const DuxXclusivePage = memo(function MemoizedDuxXclusivePage({ location }) {
	// Translations
	const pageNameText = "DUX Xclusive | DUX Beds";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

DuxXclusivePage.propTypes = {
	location: PropTypes.object
};

export default DuxXclusivePage;
