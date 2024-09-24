import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized the dux heritage page
 * @param {Object} location
 * @returns {React.Component} Memoized the dux heritage page
 */
const TheDuxHeritagePage = memo(function MemoizedTheDuxHeritagePage({ location }) {
	// Translations
	const pageNameText = "The DUX Heritage";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

TheDuxHeritagePage.propTypes = {
	location: PropTypes.object
};

export default TheDuxHeritagePage;
