import { graphql } from "gatsby";

export const query = graphql`
	fragment CountryList on Query {
		allBigCommerceCountryList {
			nodes {
				id
				bigcommerce_id
				country
				country_iso2
				country_iso3
				states {
					url
					resource
				}
			}
		}
	}
`;
