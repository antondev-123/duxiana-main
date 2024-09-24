import PropTypes from "prop-types";
import { memo } from "react";

/**
 * @description Render memoized page container component
 * @param {*} children
 * @return {React.Component} Memoized page container component
 */
export const PageContainer = memo(function MemoizedPageContainer({ children }) {
	return <main className="mt-20 h-full w-full pb-10 sm:min-h-screen">{children}</main>;
});

PageContainer.propTypes = {
	children: PropTypes.any
};

/**
 * @description Render memoized templates container component
 * @param {*} children
 * @return {React.Component} Memoized templates container component
 */
export const TemplatesContainer = memo(function MemoizedTemplatesContainer({ children }) {
	return <main className="mx-auto mt-12 h-full w-full px-4 sm:min-h-screen sm:px-6 lg:px-8">{children}</main>;
});

TemplatesContainer.propTypes = {
	children: PropTypes.any
};
