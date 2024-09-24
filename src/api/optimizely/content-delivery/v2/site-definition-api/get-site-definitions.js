import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Get a list of sites.
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/sitedefinitionapi_getv3
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		let endpoint = `/v2.0/site`;

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
