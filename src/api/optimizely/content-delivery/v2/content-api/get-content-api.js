import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Get content by given content url or by list of GUID/Reference with given language
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/contentapi_querycontent
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { contentUrl, guids, references, expand, select, matchExact } = req.query;

		let endpoint = `/v2.0/content`;

		// Query for `contentUrl`
		contentUrl
			? (endpoint += endpoint.includes("?") ? `&contentUrl=${contentUrl}` : `?contentUrl=${contentUrl}`)
			: undefined;

		// Query for `guids`
		guids ? (endpoint += endpoint.includes("?") ? `&guids=${guids}` : `?guids=${guids}`) : undefined;

		// Query for `references`
		references
			? (endpoint += endpoint.includes("?") ? `&references=${references}` : `?references=${references}`)
			: undefined;

		// Query for `expand`
		expand ? (endpoint += endpoint.includes("?") ? `&expand=${expand}` : `?expand=${expand}`) : undefined;

		// Query for `select`
		select ? (endpoint += endpoint.includes("?") ? `&select=${select}` : `?select=${select}`) : undefined;

		// Query for `matchExact`
		matchExact
			? (endpoint += endpoint.includes("?") ? `&matchExact=${matchExact}` : `?matchExact=${matchExact}`)
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
