import { graphql } from "gatsby";

export const query = graphql`
	fragment CartPage on Query {
		allBigCommerceProducts(filter: { is_visible: { eq: true } }) {
			nodes {
				id
				bigcommerce_id
				name
				custom_url {
					url
				}
				categories
				brand_id
			}
		}
		allBigCommerceBrands {
			nodes {
				name
				bigcommerce_id
			}
		}
	}
`;
