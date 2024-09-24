import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Preview API: Get the children of the content item with given language
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/contentapi_getchildrenguid
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { content_guid, expand, select, top, x_epi_continuation } = req.query;

		let endpoint = `/v2.0/content/${content_guid}/children`;

		// Query for `expand`
		expand ? (endpoint += endpoint.includes("?") ? `&expand=${expand}` : `?expand=${expand}`) : undefined;

		// Query for `top`
		top ? (endpoint += endpoint.includes("?") ? `&top=${top}` : `?top=${top}`) : undefined;

		// Query for `x_epi_continuation`
		x_epi_continuation
			? (endpoint += endpoint.includes("?")
					? `&x-epi-continuation=${x_epi_continuation}`
					: `?x-epi-continuation=${x_epi_continuation}`)
			: undefined;

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
