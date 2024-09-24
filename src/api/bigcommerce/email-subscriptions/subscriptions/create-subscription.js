import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Creates or updates an email subscription.. By default, customers receive abandoned cart emails as soon as they provide their email address in the checkout flow. They can opt out using this endpoint. However, if Store Settings > Miscellaneous > Require Consent is enabled, Abandoned Cart Emails are not sent by default, and the customer should opt-in.
 * @source https://developer.bigcommerce.com/api-reference/5d14574c64ef6-create-a-subscription
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { email, acceptsMarketingNewsletter, acceptsAbandonedCartEmails } = req.body;

		let endpoint = `/v2/subscriptions`;

		const body = {
			email,
			acceptsMarketingNewsletter,
			acceptsAbandonedCartEmails
		};

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
