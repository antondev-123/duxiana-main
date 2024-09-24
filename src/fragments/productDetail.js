import { graphql } from "gatsby";

export const query = graphql`
	fragment ProductDetail on Query {
		bigCommerceProducts(custom_url: { url: { eq: $slug } }) {
			meta_description
			reviews_rating_sum
			reviews_count
			id
			categories
			bigcommerce_id
			name
			sku
			price
			calculated_price
			retail_price
			sale_price
			map_price
			description
			weight
			related_products
			reviews_count
			availability
			is_visible
			custom_url {
				url
			}
			images {
				id
				url_standard
				url_thumbnail
				url_tiny
				url_zoom
				description
			}
			variants {
				product_id
				id
				price
				calculated_price
				sku
				image_url
				option_values {
					id
					option_id
				}
			}
			inventory_level
			brand_id
		}
		bigCommerceBrands(bigcommerce_id: { eq: $brand_id }) {
			name
			bigcommerce_id
		}
		allBigCommerceProducts {
			nodes {
				primary_image {
					url_thumbnail
					description
				}
				custom_url {
					url
				}
				name
				categories
				bigcommerce_id
				sale_price
				price
				calculated_price
			}
		}
	}
`;
