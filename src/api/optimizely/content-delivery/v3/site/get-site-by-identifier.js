import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Gets the site with the provided identifier.
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/site_get
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { identifier } = req.query;

		let endpoint = `/v3/site/${identifier}`;

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
