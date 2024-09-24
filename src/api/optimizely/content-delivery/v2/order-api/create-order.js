import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Creates new order as per provided model
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/orderapi_post
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { Shipments, CouponCodes, Name, CustomerId, Market, Currency } = req.body;

		let endpoint = `/v2.0/orders`;

		const body = {
			Shipments,
			CouponCodes,
			Name,
			CustomerId,
			Market,
			Currency
		};

		const result = await Optimizely({
			endpoint,
			method: "post",
			body
		});

		res.json(result.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
