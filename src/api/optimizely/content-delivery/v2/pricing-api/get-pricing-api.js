import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Gets sku price information
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/pricingapi_getpricings
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { contentIds, marketId, currencyCode } = req.query;

		let endpoint = `/v2.0/pricing`;

		// Query for `contentIds`
		contentIds
			? (endpoint += endpoint.includes("?") ? `&contentIds=${contentIds}` : `?contentIds=${contentIds}`)
			: undefined;

		// Query for `marketId`
		marketId ? (endpoint += endpoint.includes("?") ? `&marketId=${marketId}` : `?marketId=${marketId}`) : undefined;

		// Query for `currencyCode`
		currencyCode
			? (endpoint += endpoint.includes("?") ? `&currencyCode=${currencyCode}` : `?currencyCode=${currencyCode}`)
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
