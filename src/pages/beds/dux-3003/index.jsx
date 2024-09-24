import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized dux 3003 page
 * @param {Object} location
 * @returns {React.Component} Memoized dux 3003 page
 */
const Dux3003Page = memo(function MemoizedDux3003Page({ location }) {
	// Translations
	const pageNameText = "DUX 3003 | DUX Beds";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

Dux3003Page.propTypes = {
	location: PropTypes.object
};

export default Dux3003Page;
