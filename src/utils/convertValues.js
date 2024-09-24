/**
 * @description Convert string to lowercase
 * @param {string} e
 * @returns {string} Lowercase string
 */
export const convertStringToLowercase = (e) => (typeof e === "string" ? e.toLowerCase() : e);

/**
 * @description Convert string to uppercase
 * @param {string} e
 * @returns {string} Uppercase string
 */
export const convertStringToUppercase = (e) => (typeof e === "string" ? e.toUpperCase() : e);

/**
 * @description Convert string to title case
 * @param {string} e
 * @returns {string} Title case string
 */
export const convertStringToTitleCase = (e) =>
	typeof e === "string" ? e.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()) : e;

/**
 * @description Convert string to camel case
 * @param {string} e
 * @returns {string} Camel case string
 */
export const convertStringToCamelCase = (e) =>
	typeof e === "string" ? e.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()) : e;

/**
 * @description Convert string to snake case
 * @param {string} e
 * @returns {string} Snake case string
 */
export const convertStringToSnakeCase = (e) => (typeof e === "string" ? e.replace(/\s/g, "_").toLowerCase() : e);

/**
 * @description Convert string to kebab case
 * @param {string} e
 * @returns {string} Kebab case string
 */
export const convertStringToKebabCase = (e) => (typeof e === "string" ? e.replace(/\s/g, "-").toLowerCase() : e);

/**
 * @description Convert string to constant case
 * @param {string} e
 * @returns {string} Constant case string
 */
export const convertStringToConstantCase = (e) => (typeof e === "string" ? e.replace(/\s/g, "_").toUpperCase() : e);

/**
 * @description Convert string to sentence case
 * @param {string} e
 * @returns {string} Sentence case string
 */
export const convertStringToSentenceCase = (e) =>
	typeof e === "string"
		? e.replace(/\s/g, " ").replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
		: e;

/**
 * @description Convert string to number
 * @param {string} e
 * @returns {number} Number
 */
export const convertStringToNumber = (e) => (typeof e === "string" ? Number(e) : e);

/**
 * @description Convert string to boolean
 * @param {string} e
 * @returns {boolean} Boolean
 */
export const convertStringToBoolean = (e) => (typeof e === "string" ? e === "true" : e);

/**
 * @description Convert string to array
 * @param {string} e
 * @returns {array} Array
 */
export const convertStringToArray = (e) => (typeof e === "string" ? e.split(",") : e);

/**
 * @description Convert string to object
 * @param {string} e
 * @returns {object} Object
 */
export const convertStringToObject = (e) => (typeof e === "string" ? JSON.parse(e) : e);

/**
 * @description Convert object to string
 * @param {object} e
 * @returns {string} String
 */
export const convertObjectToString = (e) => (typeof e === "object" ? JSON.stringify(e) : e);

/**
 * @description Convert number to string
 * @param {number} e
 * @returns {string} String
 */
export const convertNumberToString = (e) => (typeof e === "number" ? e.toString() : e);
