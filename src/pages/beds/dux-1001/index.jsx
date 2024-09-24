import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized dux 1001 page
 * @param {Object} location
 * @returns {React.Component} Memoized dux 1001 page
 */
const Dux1001Page = memo(function MemoizedDux1001Page({ location }) {
	// Translations
	const pageNameText = "DUX 1001 | DUX Beds";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

Dux1001Page.propTypes = {
	location: PropTypes.object
};

export default Dux1001Page;
