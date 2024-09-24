import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description Returns one content page.
 * @source https://developer.bigcommerce.com/api-reference/4f43c76e8b328-get-a-page
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { page_id } = req.query;

		let endpoint = `/v3/content/pages/${page_id}`;

		const result = await BigCommerce({
			endpoint,
			method: "get"
		});

		res.json(result.data.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
