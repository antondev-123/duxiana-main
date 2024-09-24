import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized dux 1002 page
 * @param {Object} location
 * @returns {React.Component} Memoized dux 1002 page
 */
const Dux1002Page = memo(function MemoizedDux1002Page({ location }) {
	// Translations
	const pageNameText = "DUX 1002 | DUX Beds";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

Dux1002Page.propTypes = {
	location: PropTypes.object
};

export default Dux1002Page;
