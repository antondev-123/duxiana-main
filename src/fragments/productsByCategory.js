import { graphql } from "gatsby";

export const query = graphql`
	fragment ProductsByCategory on Query {
		allBigCommerceProducts(
			sort: { order: ASC, fields: name }
			filter: { is_visible: { eq: true }, categories: { in: $category_id } }
		) {
			nodes {
				id
				bigcommerce_id
				name
				is_featured
				price
				retail_price
				calculated_price
				sale_price
				custom_url {
					url
				}
				primary_image {
					url_standard
				}
				categories
				brand_id
				# date_created(formatString: "yyyy-M-DThh:mm:ss")
			}
		}
	}
`;
