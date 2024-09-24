import BigCommerce from "../../../../../libs/bigcommerce";

export default async function handler(req, res) {
	try {
		const { body } = req.body;

		let endpoint = `/v3/orders/payment_actions/refund_quotes`;

		const result = await BigCommerce({
			endpoint,
			method: "post",
			body
		});

		res.json(result.data.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
