import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Get the children of the content item by given content reference or unique identifier and language.
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/content_getchildren
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { content_identifier, expand, select, top } = req.query;

		let endpoint = `/v3.0/content/${content_identifier}/children`;

		// Query for `expand`
		expand ? (endpoint += endpoint.includes("?") ? `&expand=${expand}` : `?expand=${expand}`) : undefined;

		// Query for `top`
		top ? (endpoint += endpoint.includes("?") ? `&top=${top}` : `?top=${top}`) : undefined;

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
