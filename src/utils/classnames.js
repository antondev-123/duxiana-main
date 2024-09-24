/**
 * @description For multiple class names that include internal logic
 * @param  {...any} classes
 * @returns {string} Class names
 */
export const classNames = (...classes) => classes.filter(Boolean).join(" ");
