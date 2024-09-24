import { graphql } from "gatsby";

export const query = graphql`
	fragment FeaturedProducts on Query {
		allBigCommerceProducts(filter: { is_visible: { eq: true }, is_featured: { eq: true } }) {
			nodes {
				id
				bigcommerce_id
				name
				is_featured
				price
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
