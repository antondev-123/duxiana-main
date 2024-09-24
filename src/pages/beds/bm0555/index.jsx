import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized BM0555 page
 * @param {Object} location
 * @returns {React.Component} Memoized BM0555 page
 */
const BM0555Page = memo(function MemoizedBM0555Page({ location }) {
	// Translations
	const pageNameText = "BM0555 | DUX Beds";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

BM0555Page.propTypes = {
	location: PropTypes.object
};

export default BM0555Page;
