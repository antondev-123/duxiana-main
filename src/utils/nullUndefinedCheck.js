/**
 * @description Check for null or undefined values (https://javascript.plainenglish.io/how-to-check-for-null-in-javascript-dffab64d8ed5)
 * @param {*} value
 * @returns {*} Returned value or null
 */
export const checkForNullOrUndefined = (value) => {
	return typeof value !== "undefined" && (typeof value !== "object" || !value) ? value : null;
};
