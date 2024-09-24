import { graphql } from "gatsby";

export const query = graphql`
	fragment PageContent on Query {
		bigCommercePageContent(url: { eq: $slug }) {
			id
			body
		}
	}
`;
