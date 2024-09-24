import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized privacy policy page
 * @param {Object} location
 * @returns {React.Component} Memoized privacy policy page
 */
const PrivacyPolicyPage = memo(function MemoizedPrivacyPolicyPage({ location }) {
	// Translations
	const pageNameText = "Privacy Policy";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

PrivacyPolicyPage.propTypes = {
	location: PropTypes.object
};

export default PrivacyPolicyPage;
