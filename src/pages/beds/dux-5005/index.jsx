import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized dux 5005 page
 * @param {Object} location
 * @returns {React.Component} Memoized dux 5005 page
 */
const Dux5005Page = memo(function MemoizedDux5005Page({ location }) {
	// Translations
	const pageNameText = "DUX 5005 | DUX Beds";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

Dux5005Page.propTypes = {
	location: PropTypes.object
};

export default Dux5005Page;
