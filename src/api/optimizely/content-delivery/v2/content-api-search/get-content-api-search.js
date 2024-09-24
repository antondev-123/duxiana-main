import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Search contents based on criteria
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/contentapisearch_search
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { languages, filter, orderby, query, skip, top, personalize, expand } = req.query;

		let endpoint = `/v2.0/content/search`;

		// Query for `languages`
		languages
			? (endpoint += endpoint.includes("?") ? `&languages=${languages}` : `?languages=${languages}`)
			: undefined;

		// Query for `filter`
		filter ? (endpoint += endpoint.includes("?") ? `&filter=${filter}` : `?filter=${filter}`) : undefined;

		// Query for `orderby`
		orderby ? (endpoint += endpoint.includes("?") ? `&orderby=${orderby}` : `?orderby=${orderby}`) : undefined;

		// Query for `query`
		query ? (endpoint += endpoint.includes("?") ? `&query=${query}` : `?query=${query}`) : undefined;

		// Query for `skip`
		skip ? (endpoint += endpoint.includes("?") ? `&skip=${skip}` : `?skip=${skip}`) : undefined;

		// Query for `top`
		top ? (endpoint += endpoint.includes("?") ? `&top=${top}` : `?top=${top}`) : undefined;

		// Query for `personalize`
		personalize
			? (endpoint += endpoint.includes("?") ? `&personalize=${personalize}` : `?personalize=${personalize}`)
			: undefined;

		// Query for `expand`
		expand ? (endpoint += endpoint.includes("?") ? `&expand=${expand}` : `?expand=${expand}`) : undefined;

		const result = await Optimizely({
			endpoint,
			method: "get"
		});

		res.json(result.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
