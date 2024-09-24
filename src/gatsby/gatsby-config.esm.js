import dotenv from "dotenv";
import path from "path";
import {
	BIGCOMMERCE_API_ACCEPT_HEADER,
	BIGCOMMERCE_API_ACCESS_TOKEN,
	BIGCOMMERCE_API_ALLOWED_METHODS,
	BIGCOMMERCE_API_CLIENT_ID,
	BIGCOMMERCE_API_CORS_ORIGIN,
	BIGCOMMERCE_API_SECRET,
	BIGCOMMERCE_API_SITE_URL,
	BIGCOMMERCE_API_STORE_HASH
} from "../constants/bigcommerce";
import { IS_PROD } from "../constants/global";
import { SENTRY_DSN, SENTRY_ENVIRONMENT } from "../constants/sentry";

// Dotenv
dotenv.config({
	path: path.resolve(`./.env.${process.env.NODE_ENV}`)
});

// Sentry
const SentryDsn = IS_PROD ? SENTRY_DSN : null;
const SentryEnv = SENTRY_ENVIRONMENT;

module.exports = {
	siteMetadata: {
		siteUrl: BIGCOMMERCE_API_SITE_URL
	},
	plugins: [
		{
			resolve: "gatsby-plugin-nprogress",
			options: {
				color: "#5468ff",
				showSpinner: false
			}
		},
		{
			resolve: "@epicdesignlabs/gatsby-source-bigcommerce",
			options: {
				clientId: BIGCOMMERCE_API_CLIENT_ID,
				secret: BIGCOMMERCE_API_SECRET,
				accessToken: BIGCOMMERCE_API_ACCESS_TOKEN,
				storeHash: BIGCOMMERCE_API_STORE_HASH,
				endpoints: {
					BigCommerceSEO: "/v3/settings/storefront/seo",
					BigCommerceRedirects: "/v2/redirects?limit=250",
					BigCommerceStore: "/v2/store",
					BigCommerceCategories: "/v3/catalog/categories?limit=250",
					BigCommerceCategoriesTree: "/v3/catalog/categories/tree",
					BigCommercePages: "/v3/content/pages?limit=250",
					BigCommercePageContent: "/v2/pages?limit=250",
					BigCommerceCountryList: "/v2/countries?limit=250",
					BigCommerceProducts:
						"/v3/catalog/products?include=variants,images,custom_fields,bulk_pricing_rules,primary_image,videos,options,modifiers"
				},
				preview: true,
				siteUrl: BIGCOMMERCE_API_SITE_URL,
				headers: {
					"Access-Control-Allow-Headers": BIGCOMMERCE_API_ACCEPT_HEADER,
					"Access-Control-Allow-Credentials": "true",
					"Access-Control-Allow-Origin": BIGCOMMERCE_API_CORS_ORIGIN,
					"Access-Control-Allow-Methods": BIGCOMMERCE_API_ALLOWED_METHODS
				}
			}
		},
		{
			resolve: "@sentry/gatsby",
			options: {
				dsn: SentryDsn,
				environment: SentryEnv,
				tracesSampleRate: 1
			}
		},
		{
			resolve: "gatsby-plugin-sass",
			options: {
				postCssPlugins: [
					require("tailwindcss"),
					require("tailwindcss/nesting")(require("postcss-nesting")),
					require("autoprefixer"),
					require("postcss-import"),
					require("postcss-preset-env")({
						features: { "nesting-rules": false },
						stage: 0
					})
				]
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: path.resolve("./src/images")
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "fonts",
				path: path.resolve("./src/fonts")
			}
		},
		{
			resolve: "gatsby-plugin-netlify",
			options: {
				headers: {
					"/public/page-data/**/*": ["Cache-Control: public, max-age=0, must-revalidate"],
					"/app-data.json": ["Cache-Control: public, max-age=0, must-revalidate"],
					"/static/**/*": ["Cache-Control: public, max-age=31536000, immutable"],
					"/**/*.{js,css}": ["Cache-Control: public, max-age=31536000, immutable"]
				}
			}
		},
		{
			resolve: "gatsby-plugin-sharp",
			options: {
				defaults: {
					formats: ["webp"],
					placeholder: "dominantColor",
					quality: 90,
					backgroundColor: "transparent"
				}
			}
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg$/
				}
			}
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "./src/images/favicon.png"
			}
		},
		"gatsby-plugin-postcss",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-catch-links",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-transformer-sharp",
		"gatsby-plugin-robots-txt"
	],
	trailingSlash: "always",
	flags: {
		PRESERVE_FILE_DOWNLOAD_CACHE: true,
		PARALLEL_SOURCING: true,
		FAST_DEV: true
	}
};
