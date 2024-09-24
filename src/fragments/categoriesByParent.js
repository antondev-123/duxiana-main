import { graphql } from "gatsby";

export const query = graphql`
	fragment CategoriesByParent on Query {
		allBigCommerceCategoriesTree(sort: { order: ASC, fields: name }, filter: { is_visible: { eq: true } }) {
			nodes {
				id
				bigcommerce_id
				name
				url
				is_visible
				internal {
					content
				}
			}
		}
		allBigCommerceCategories(sort: { order: ASC, fields: name }, filter: { is_visible: { eq: true } }) {
			nodes {
				id
				name
				bigcommerce_id
				is_visible
				custom_url {
					url
				}
				parent_id
			}
		}
	}
`;
