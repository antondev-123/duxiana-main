import { useEffect, useRef, useState } from "react";

/**
 * @description Custom React hook that handles showing/hiding components (e.g. modals, dropdowns, etc.)
 * It can hide those components either by pressing the `ESC` buttom or by clicking outside the component DOM
 * @param {boolean} initialIsVisible
 * @returns {object} ref, isComponentVisible, setIsComponentVisible
 */
export const useComponentVisible = (initialIsVisible) => {
	const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);

	const ref = useRef(null);

	const hideComponent = (e) => {
		if (e?.key === "Escape" && ref?.current) {
			setIsComponentVisible(false);
		}
	};

	const clickOutsideComponent = (e) => {
		if (ref?.current && !Object.values(ref?.current).includes(e?.target)) {
			setIsComponentVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", hideComponent, true);
		document.addEventListener("click", clickOutsideComponent, true);
		document.addEventListener("touchstart", clickOutsideComponent, true);

		return () => {
			document.removeEventListener("keydown", hideComponent, true);
			document.removeEventListener("click", clickOutsideComponent, true);
			document.removeEventListener("touchstart", clickOutsideComponent, true);
		};
	});

	return { ref, isComponentVisible, setIsComponentVisible };
};
