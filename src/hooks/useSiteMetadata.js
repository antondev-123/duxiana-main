import { graphql, useStaticQuery } from "gatsby";

/**
 * Custom hook that handles the site metadata
 *
 * @returns {object} Site SEO and store metadata
 */
const useSiteMetadata = () => {
	const BCQuery = graphql`
		query {
			allBigCommerceSeo {
				nodes {
					data {
						meta_description
						meta_keywords
						page_title
						www_redirect
					}
					id
				}
			}
			allBigCommerceStore {
				nodes {
					account_uuid
					address
					admin_email
					bigcommerce_id
					control_panel_base_url
					country
					country_code
					currency
					currency_symbol
					currency_symbol_location
					decimal_places
					decimal_separator
					default_channel_id
					default_site_id
					dimension_decimal_places
					dimension_decimal_token
					dimension_thousands_token
					dimension_units
					domain
					favicon_url
					features {
						checkout_type
						facebook_catalog_id
						graphql_storefront_api_enabled
						multi_storefront_enabled
						shopper_consent_tracking_enabled
						sitewidehttps_enabled
						stencil_enabled
						wishlists_enabled
					}
					first_name
					id
					industry
					is_price_entered_with_tax
					language
					last_name
					logo {
						url
					}
					name
					order_email
					phone
					plan_is_trial
					plan_level
					plan_name
					secure_url
					status
					store_id
					thousands_separator
					timezone {
						date_format {
							display
							export
							extended_display
						}
						dst_correction
						dst_offset
						name
						raw_offset
					}
					weight_units
				}
			}
		}
	`;

	// GraphQL query to get site metadata
	const { allBigCommerceSeo, allBigCommerceStore } = useStaticQuery(BCQuery);

	// SEO details
	const description = allBigCommerceSeo?.nodes?.[0]?.data?.meta_description || "";
	const keywords = allBigCommerceSeo?.nodes?.[0]?.data?.meta_keywords || "";
	const pageTitle = allBigCommerceSeo?.nodes?.[0]?.data?.page_title || "";
	const wwwRedirect = allBigCommerceSeo?.nodes?.[0]?.data?.www_redirect || "";

	// Store details
	const accountUuid = allBigCommerceStore?.nodes?.[0]?.account_uuid || "";
	const address = allBigCommerceStore?.nodes?.[0]?.address || "";
	const adminEmail = allBigCommerceStore?.nodes?.[0]?.admin_email || "";
	const bigcommerceId = allBigCommerceStore?.nodes?.[0]?.bigcommerce_id || "";
	const controlPanelBaseUrl = allBigCommerceStore?.nodes?.[0]?.control_panel_base_url || "";
	const country = allBigCommerceStore?.nodes?.[0]?.country || "";
	const countryCode = allBigCommerceStore?.nodes?.[0]?.country_code || "";
	const currency = allBigCommerceStore?.nodes?.[0]?.currency || "";
	const currencySymbol = allBigCommerceStore?.nodes?.[0]?.currency_symbol || "";
	const currencySymbolLocation = allBigCommerceStore?.nodes?.[0]?.currency_symbol_location || "";
	const decimalPlaces = allBigCommerceStore?.nodes?.[0]?.decimal_places || "";
	const decimalSeparator = allBigCommerceStore?.nodes?.[0]?.decimal_separator || "";
	const defaultChannelId = allBigCommerceStore?.nodes?.[0]?.default_channel_id || "";
	const defaultSiteId = allBigCommerceStore?.nodes?.[0]?.default_site_id || "";
	const dimensionDecimalPlaces = allBigCommerceStore?.nodes?.[0]?.dimension_decimal_places || "";
	const dimensionDecimalToken = allBigCommerceStore?.nodes?.[0]?.dimension_decimal_token || "";
	const dimensionThousandsToken = allBigCommerceStore?.nodes?.[0]?.dimension_thousands_token || "";
	const dimensionUnits = allBigCommerceStore?.nodes?.[0]?.dimension_units || "";
	const domain = allBigCommerceStore?.nodes?.[0]?.domain || "";
	const faviconUrl = allBigCommerceStore?.nodes?.[0]?.favicon_url || "";
	const features = allBigCommerceStore?.nodes?.[0]?.features || {};
	const firstName = allBigCommerceStore?.nodes?.[0]?.first_name || "";
	const id = allBigCommerceStore?.nodes?.[0]?.id || "";
	const industry = allBigCommerceStore?.nodes?.[0]?.industry || "";
	const isPriceEnteredWithTax = allBigCommerceStore?.nodes?.[0]?.is_price_entered_with_tax || false;
	const language = allBigCommerceStore?.nodes?.[0]?.language || "en";
	const lastName = allBigCommerceStore?.nodes?.[0]?.last_name || "";
	const logo = allBigCommerceStore?.nodes?.[0]?.logo || {};
	const name = allBigCommerceStore?.nodes?.[0]?.name || "";
	const orderEmail = allBigCommerceStore?.nodes?.[0]?.order_email || "";
	const phone = allBigCommerceStore?.nodes?.[0]?.phone || "";
	const planIsTrial = allBigCommerceStore?.nodes?.[0]?.plan_is_trial || false;
	const planLevel = allBigCommerceStore?.nodes?.[0]?.plan_level || "";
	const planName = allBigCommerceStore?.nodes?.[0]?.plan_name || "";
	const secureUrl = allBigCommerceStore?.nodes?.[0]?.secure_url || "";
	const status = allBigCommerceStore?.nodes?.[0]?.status || "";
	const storeId = allBigCommerceStore?.nodes?.[0]?.store_id || 0;
	const thousandsSeparator = allBigCommerceStore?.nodes?.[0]?.thousands_separator || "";
	const timezone = allBigCommerceStore?.nodes?.[0]?.timezone || {};
	const weightUnits = allBigCommerceStore?.nodes?.[0]?.weight_units || "";

	return {
		description,
		keywords,
		pageTitle,
		wwwRedirect,
		accountUuid,
		address,
		adminEmail,
		bigcommerceId,
		controlPanelBaseUrl,
		country,
		countryCode,
		currency,
		currencySymbol,
		currencySymbolLocation,
		decimalPlaces,
		decimalSeparator,
		defaultChannelId,
		defaultSiteId,
		dimensionDecimalPlaces,
		dimensionDecimalToken,
		dimensionThousandsToken,
		dimensionUnits,
		domain,
		faviconUrl,
		features,
		firstName,
		id,
		industry,
		isPriceEnteredWithTax,
		language,
		lastName,
		logo,
		name,
		orderEmail,
		phone,
		planIsTrial,
		planLevel,
		planName,
		secureUrl,
		status,
		storeId,
		thousandsSeparator,
		timezone,
		weightUnits
	};
};

export default useSiteMetadata;
