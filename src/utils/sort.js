/**
 * @description Sort products by featured
 * @param {Object} a
 * @param {Object} b
 * @returns {number} Sorted products
 */
export const sortByFeatured = (a, b) => {
	const fa = a.is_featured;
	const fb = b.is_featured;

	return fa > fb ? 1 : fa < fb ? -1 : 0;
};

/**
 * @description nSort products by `recency` (newest) in ascending order: ;
 * @param {Object} a
 * @param {Object} b
 * @returns {number} Sorted products
 */
export const sortByRecencyAsc = (a, b) => {
	const fa = a.date_created;
	const fb = b.date_created;

	return fa < fb ? 1 : fa > fb ? -1 : 0;
};

/**
 * @description Sort products by `recency` (newest) in descending order
 * @param {Object} a
 * @param {Object} b
 * @returns {number} Sorted products
 */
export const sortByRecencyDesc = (a, b) => {
	const fa = a.date_created;
	const fb = b.date_created;

	return fa > fb ? 1 : fa < fb ? -1 : 0;
};

/**
 * @description Sort products by `name` in ascending order
 * @param {Object} a
 * @param {Object} b
 * @returns {number} Sorted products
 */
export const sortByNameAsc = (a, b) => {
	const fa = a.name.toLowerCase();
	const fb = b.name.toLowerCase();

	return fa < fb ? -1 : fa > fb ? 1 : 0;
};

/**
 * @description Sort products by `name` in descending order
 * @param {Object} a
 * @param {Object} b
 * @returns {number} Sorted products
 */
export const sortByNameDesc = (a, b) => {
	const fa = a.name.toLowerCase();
	const fb = b.name.toLowerCase();

	return fa > fb ? -1 : fa < fb ? 1 : 0;
};

/**
 * @description Sort products by `price` in ascending order
 * @param {Object} a
 * @param {Object} b
 * @returns {number} Sorted products
 */
export const sortByPriceAsc = (a, b) => {
	const fa = a.price;
	const fb = b.price;

	return fa > fb ? 1 : fa < fb ? -1 : 0;
};

/**
 * @description nSort products by `price` in descending order: ;
 * @param {Object} a
 * @param {Object} b
 * @returns {number} Sorted products
 */
export const sortByPriceDesc = (a, b) => {
	const fa = a.price;
	const fb = b.price;

	return fa < fb ? 1 : fa > fb ? -1 : 0;
};
