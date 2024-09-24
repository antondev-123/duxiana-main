import PropTypes from "prop-types";
import { memo } from "react";
import LoginForm from "../../components/forms/loginForm";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";

/**
 * @description Render memoized home page
 * @param {Object} location
 * @returns {React.Component} Memoized home page
 */
const LoginPage = memo(function MemoizedLoginPage({ location }) {
	// Translations
	const pageNameText = "Login";

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<LoginForm />
			</PageContainer>
		</>
	);
});

LoginPage.propTypes = {
	location: PropTypes.object
};

export default LoginPage;
