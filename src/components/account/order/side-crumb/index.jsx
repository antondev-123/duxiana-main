import { memo } from "react";

/**
 * @description Render memoized side crumb component
 * @returns {React.Component} Memoized side crumb component
 */
const SideCrumb = memo(function MemoizedSideCrumb() {
	return (
		<div className="flex w-8 flex-col items-center justify-center py-6">
			<div className="h-1 w-1 rounded-full bg-gray-600"></div>
			<div className="h-full w-[2px] border-l-2"></div>
			<div className="h-1 w-1 rounded-full bg-gray-600"></div>
		</div>
	);
});

export default SideCrumb;
