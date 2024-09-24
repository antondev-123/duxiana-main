import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Gets sku inventory information
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/inventoryapi_get
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { contentId } = req.query;

		let endpoint = `/v2.0/inventory`;

		// Query for `contentId`
		contentId
			? (endpoint += endpoint.includes("?") ? `&contentId=${contentId}` : `?contentId=${contentId}`)
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
