import { useEffect, useRef, useState } from "react";

/**
 * @description Custom hook that triggers a callback when the user scrolls past a certain point
 * @param {boolean} initialState
 * @returns {object} triggerOnScrollRef, isBackToTop, isMenuSelectedOnScroll, setIsMenuSelectedOnScroll
 */
export const useTriggerOnScroll = (initialState) => {
	const [isMenuSelectedOnScroll, setIsMenuSelectedOnScroll] = useState(initialState);
	const [isBackToTop, setIsBackToTop] = useState(true);

	const triggerOnScrollRef = useRef(null);

	useEffect(() => {
		const handleMenuSelectionOnScroll = (e) => {
			if (!triggerOnScrollRef.current?.contains(e.target)) {
				setIsMenuSelectedOnScroll(true);
			}
		};

		const handleOnScroll = () => {
			const getOffset = (el) => {
				let _y = 0;

				while (el && !isNaN(el.offsetTop) && !isNaN(el.offsetTop)) {
					_y += el.offsetTop - el.scrollTop;
					el = el.offsetParent;
				}

				return { top: _y };
			};

			const hasScrolledTo = (el) => {
				if (!el) return false;

				const top = getOffset(el).top;
				const offset = window.innerHeight / 16;

				return top - offset <= window.scrollY;
			};

			const viewed = hasScrolledTo(triggerOnScrollRef.current);

			if (viewed) {
				setIsBackToTop(false);
			} else {
				setIsBackToTop(true);
			}
		};

		document.addEventListener("mouseleave", (e) => handleMenuSelectionOnScroll(e), true);
		document.addEventListener("scroll", handleOnScroll, true);

		return () => {
			document.removeEventListener("mouseleave", (e) => handleMenuSelectionOnScroll(e), true);
			document.removeEventListener("scroll", handleOnScroll, true);
		};
	});

	return {
		triggerOnScrollRef,
		isBackToTop,
		isMenuSelectedOnScroll,
		setIsMenuSelectedOnScroll
	};
};
