import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized dux 2002 page
 * @param {Object} location
 * @returns {React.Component} Memoized dux 2002 page
 */
const Dux2002Page = memo(function MemoizedDux2002Page({ location }) {
	// Translations
	const pageNameText = "DUX 2002 | DUX Beds";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

Dux2002Page.propTypes = {
	location: PropTypes.object
};

export default Dux2002Page;
