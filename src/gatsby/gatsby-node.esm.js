import path from "path";

/**
 * ============================================================================
 * Create Babel config
 * ============================================================================
 */
export const onCreateBabelConfig = ({ actions: { setBabelPreset } }) => {
	setBabelPreset({
		name: "babel-preset-gatsby",
		options: {
			reactRuntime: "automatic",
			reactImportSource: "react"
		}
	});
};

/**
 * ============================================================================
 * Override Gatsby default Webpack configuration
 * ============================================================================
 */
export const onCreateWebpackConfig = async ({
	actions: { setWebpackConfig, replaceWebpackConfig },
	plugins,
	stage,
	getConfig
}) => {
	setWebpackConfig({
		resolve: {
			fallback: {
				fs: false,
				module: false,
				vm: require.resolve("vm-browserify"),
				path: require.resolve("path-browserify")
			}
		}
	});

	// TODO: temporary workaround for https://github.com/gatsbyjs/gatsby/issues/31878
	if (stage === "build-javascript") {
		const config = getConfig();

		const options = {
			minimizerOptions: {
				preset: [
					`default`,
					{
						svgo: {
							full: true
						}
					}
				]
			}
		};

		// Find CSS minimizer
		const minifyCssIndex = config.optimization.minimizer.findIndex(
			(minimizer) => minimizer.constructor.name === "CssMinimizerPlugin"
		);

		// If found, overwrite existing CSS minimizer with the new one
		if (minifyCssIndex > -1) {
			config.optimization.minimizer[minifyCssIndex] = plugins.minifyCss(options);
		}

		// Replace webpack config with the modified object
		replaceWebpackConfig(config);
	}
};

/**
 * ============================================================================
 * Create Gatsby pages
 * ============================================================================
 */
export const createPages = async ({ graphql, actions: { createPage, createRedirect }, reporter }) => {
	// Query for BigCommerce nodes to use in creating pages.
	const BCQuery = await graphql(`
		query {
			allBigCommerceCategories(
				sort: { order: ASC, fields: sort_order }
				filter: {
					is_visible: { eq: true }
					custom_url: { url: { ne: null } }
					name: { ne: null }
					bigcommerce_id: { gt: 0 }
				}
			) {
				edges {
					node {
						bigcommerce_id
						custom_url {
							is_customized
							url
						}
						default_product_sort
						description
						id
						image_url
						is_visible
						layout_file
						meta_description
						meta_keywords
						name
						page_title
						parent_id
						search_keywords
						sort_order
						views
					}
				}
			}
			allBigCommerceProducts(
				sort: { order: ASC, fields: sort_order }
				filter: {
					is_visible: { eq: true }
					custom_url: { url: { ne: null } }
					name: { ne: null }
					bigcommerce_id: { gt: 0 }
				}
			) {
				edges {
					node {
						availability
						availability_description
						base_variant_id
						bigcommerce_id
						bin_picking_number
						brand_id
						calculated_price
						categories
						condition
						cost_price
						custom_fields {
							id
							name
							value
						}
						custom_url {
							is_customized
							url
						}
						date_created(difference: "", formatString: "", locale: "")
						date_modified(difference: "", formatString: "", locale: "")
						depth
						description
						fixed_cost_shipping_price
						gift_wrapping_options_type
						gtin
						height
						id
						images {
							date_modified(formatString: "", locale: "", difference: "")
							description
							id
							image_file
							is_thumbnail
							product_id
							sort_order
							url_standard
							url_thumbnail
							url_tiny
							url_zoom
						}
						inventory_level
						inventory_tracking
						inventory_warning_level
						is_condition_shown
						is_featured
						is_free_shipping
						is_preorder_only
						is_price_hidden
						is_visible
						layout_file
						map_price
						meta_description
						meta_keywords
						modifiers {
							config {
								product_list_adjusts_inventory
								product_list_adjusts_pricing
								product_list_shipping_calc
							}
							display_name
							id
							name
							option_values {
								adjusters {
									image_url
									purchasing_disabled {
										message
										status
									}
								}
								id
								is_default
								label
								option_id
								sort_order
								value_data {
									product_id
								}
							}
							product_id
							required
							sort_order
							type
						}
						mpn
						name
						open_graph_description
						open_graph_title
						open_graph_type
						open_graph_use_image
						open_graph_use_meta_description
						option_set_display
						open_graph_use_product_name
						option_set_id
						options {
							config {
								product_list_adjusts_inventory
								product_list_adjusts_pricing
								product_list_shipping_calc
							}
							display_name
							id
							name
							option_values {
								id
								is_default
								label
								sort_order
								value_data {
									colors
									image_url
									product_id
								}
							}
							product_id
							sort_order
							type
						}
						order_quantity_maximum
						order_quantity_minimum
						page_title
						preorder_message
						price
						price_hidden_label
						primary_image {
							date_modified(difference: "", formatString: "", locale: "")
							description
							id
							image_file
							is_thumbnail
							product_id
							sort_order
							url_standard
							url_thumbnail
							url_tiny
							url_zoom
						}
						product_tax_code
						related_products
						retail_price
						reviews_count
						reviews_rating_sum
						sale_price
						search_keywords
						sku
						sort_order
						tax_class_id
						total_sold
						type
						upc
						variants {
							bin_picking_number
							calculated_price
							calculated_weight
							cost_price
							depth
							fixed_cost_shipping_price
							gtin
							height
							id
							image_url
							inventory_warning_level
							inventory_level
							is_free_shipping
							map_price
							mpn
							option_values {
								id
								label
								option_display_name
								option_id
							}
							price
							product_id
							purchasing_disabled
							purchasing_disabled_message
							retail_price
							sale_price
							sku
							sku_id
							upc
							weight
							width
						}
						view_count
						warranty
						weight
						width
					}
				}
			}
			allBigCommercePages(
				sort: { order: ASC, fields: sort_order }
				filter: { is_visible: { eq: true }, bigcommerce_id: { gt: 0 }, url: { ne: null }, name: { ne: null } }
			) {
				edges {
					node {
						bigcommerce_id
						channel_id
						contact_fields
						content_type
						email
						id
						is_customers_only
						is_homepage
						is_visible
						link
						meta_description
						meta_keywords
						meta_title
						name
						parent_id
						search_keywords
						sort_order
						type
						url
					}
				}
			}
			allBigCommerceRedirects(
				sort: { order: ASC, fields: id }
				filter: { bigcommerce_id: { gt: 0 }, id: {}, url: { ne: "null" }, path: { ne: "null" } }
			) {
				edges {
					node {
						path
						url
					}
				}
			}
		}
	`);

	// Handle GraphQL errors
	if (BCQuery.errors) {
		BCQuery.errors.forEach((e) => reporter.panicOnBuild(e.message));

		return;
	}

	// BigCommerce `categories` data
	const BCCategories = BCQuery.data.allBigCommerceCategories.edges;

	// BigCommerce `products` data
	const BCProducts = BCQuery.data.allBigCommerceProducts.edges;

	// BigCommerce `pages` data
	const BCPages = BCQuery.data.allBigCommercePages.edges;

	// BigCommerce `redirects` data
	const BCRedirects = BCQuery.data.allBigCommerceRedirects.edges;

	// Create page for each `category`
	BCCategories.forEach(({ node }) => {
		const {
			custom_url: { url }
		} = node;

		createPage({
			path: url,
			component: path.resolve("./src/templates/category.jsx"),
			context: node
		});
	});

	// Create page for each `product`
	BCProducts.forEach(({ node }) => {
		const {
			custom_url: { url }
		} = node;

		createPage({
			path: url,
			component: path.resolve("./src/templates/product.jsx"),
			context: node
		});
	});

	// Create page for each `page`
	BCPages.forEach(({ node }) => {
		const { url } = node;

		createPage({
			path: url,
			component: path.resolve("./src/templates/page.jsx"),
			context: node
		});
	});

	// Create page for each `page`
	BCRedirects.forEach(({ node }) => {
		const { path, url } = node;

		createRedirect({ fromPath: url, toPath: path, redirectInBrowser: true, isPermanent: true });
	});
};
