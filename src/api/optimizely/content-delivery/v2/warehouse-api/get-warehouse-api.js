import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Gets warehouse by code
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/warehouseapi_get
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { warehouse_code } = req.query;

		let endpoint = `/v2.0/warehouses/${warehouse_code}`;

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
