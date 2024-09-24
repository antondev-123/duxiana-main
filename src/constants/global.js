// Environment
export const IS_PROD = process.env.NODE_ENV === "production";
export const SITE_URL =
	typeof window !== "undefined" && IS_PROD
		? window.location.protocol + "//" + window.location.hostname
		: process.env.GATSBY_PUBLIC_DEVELOPMENT_SITE_URL;
export const PRODUCTION_SITE_URL = process.env.GATSBY_PUBLIC_PRODUCTION_SITE_URL;

// Numerical Values
export const ON_ERROR_RETRY_COUNT = 5;
export const REVALIDATION_INTERVAL = 3000;
