import PropTypes from "prop-types";
import { memo } from "react";
import RegisterForm from "../../components/forms/registerForm";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";

/**
 * @description Render memoized register page
 * @param {Object} location
 * @returns {React.Component} Memoized register page
 */
const RegisterPage = memo(function MemoizedRegisterPage({ location }) {
	// Translations
	const pageNameText = "Register";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<RegisterForm />
			</PageContainer>
		</>
	);
});

RegisterPage.propTypes = {
	location: PropTypes.object
};

export default RegisterPage;
