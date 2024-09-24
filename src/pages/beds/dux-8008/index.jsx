import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized dux 8008 page
 * @param {Object} location
 * @returns {React.Component} Memoized dux 8008 page
 */
const Dux8008Page = memo(function MemoizedDux8008Page({ location }) {
	// Translations
	const pageNameText = "DUX 8008 | DUX Beds";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

Dux8008Page.propTypes = {
	location: PropTypes.object
};

export default Dux8008Page;
