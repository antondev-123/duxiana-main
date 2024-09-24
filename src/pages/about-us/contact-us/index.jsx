import PropTypes from "prop-types";
import { memo } from "react";
import { PageContainer } from "../../../components/layouts/common/containers";
import Seo from "../../../components/seo";

/**
 * @description Render memoized contact us page
 * @param {Object} location
 * @returns {React.Component} Memoized contact us page
 */
const ContactUsPage = memo(function MemoizedContactUsPage({ location }) {
	// Translations
	const pageNameText = "Contact Us";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<h1>{pageNameText}</h1>
			</PageContainer>
		</>
	);
});

ContactUsPage.propTypes = {
	location: PropTypes.object
};

export default ContactUsPage;
