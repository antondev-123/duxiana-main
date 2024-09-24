import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized dux 303 page
 * @param {Object} location
 * @returns {React.Component} Memoized dux 303 page
 */
const Dux303Page = memo(function MemoizedDux303Page({ location }) {
	// Translations
	const pageNameText = "DUX 303 | DUX Beds";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

Dux303Page.propTypes = {
	location: PropTypes.object
};

export default Dux303Page;
