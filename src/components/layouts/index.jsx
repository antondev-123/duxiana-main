import PropTypes from "prop-types";
import { memo } from "react";
// import Footer from "./common/footer";
import Header from "./common/header";

/**
 * @description  Render memoized main layout component
 * @param {*} children
 * @returns {React.Component} Memoized main layout component
 */
const Layout = memo(function MemoizedLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			{/* <Footer /> */}
		</>
	);
});

Layout.propTypes = {
	children: PropTypes.any
};

export default Layout;
