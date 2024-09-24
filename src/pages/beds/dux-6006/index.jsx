import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized dux 6006 page
 * @param {Object} location
 * @returns {React.Component} Memoized dux 6006 page
 */
const Dux6006Page = memo(function MemoizedDux6006Page({ location }) {
	// Translations
	const pageNameText = "DUX 6006 | DUX Beds";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

Dux6006Page.propTypes = {
	location: PropTypes.object
};

export default Dux6006Page;
