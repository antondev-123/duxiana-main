import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Get content by given content url or by list of GUID/Reference with given language
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/content_querycontent
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { ContentUrl, Guids, References, Expand, Select, MatchExact } = req.query;

		let endpoint = `/v2.0/content`;

		// Query for `ContentUrl`
		ContentUrl
			? (endpoint += endpoint.includes("?") ? `&ContentUrl=${ContentUrl}` : `?ContentUrl=${ContentUrl}`)
			: undefined;

		// Query for `Guids`
		Guids ? (endpoint += endpoint.includes("?") ? `&Guids=${Guids}` : `?Guids=${Guids}`) : undefined;

		// Query for `References`
		References
			? (endpoint += endpoint.includes("?") ? `&References=${References}` : `?References=${References}`)
			: undefined;

		// Query for `Expand`
		Expand ? (endpoint += endpoint.includes("?") ? `&Expand=${Expand}` : `?Expand=${Expand}`) : undefined;

		// Query for `Select`
		Select ? (endpoint += endpoint.includes("?") ? `&Select=${Select}` : `?Select=${Select}`) : undefined;

		// Query for `MatchExact`
		MatchExact
			? (endpoint += endpoint.includes("?") ? `&MatchExact=${MatchExact}` : `?MatchExact=${MatchExact}`)
			: undefined;

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
