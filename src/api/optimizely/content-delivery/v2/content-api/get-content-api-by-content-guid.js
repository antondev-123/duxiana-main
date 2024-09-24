import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Get content by given content GUID and language
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/contentapi_getV2content
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { content_guid, expand, select } = req.query;

		let endpoint = `/v2.0/content/${content_guid}`;

		// Query for `expand`
		expand ? (endpoint += endpoint.includes("?") ? `&expand=${expand}` : `?expand=${expand}`) : undefined;

		// Query for `select`
		select ? (endpoint += endpoint.includes("?") ? `&select=${select}` : `?select=${select}`) : undefined;

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
