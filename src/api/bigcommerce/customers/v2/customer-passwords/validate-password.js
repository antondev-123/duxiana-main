import BigCommerce from "../../../../../libs/bigcommerce";

/**
 * @description This endpoint has special rate limiting protections to protect against abuse. Provided a password, will return a true/false response indicating if the provided password matches the customer’s current password. This endpoint is useful if you want to power the login of another system using BigCommerce’s stored customer accounts, or as a safe way to migrate passwords to another system (by checking them against BigCommerce’s password, and if correct, storing it in another system securely.)If the password matches what’s stored against the customer account, the response will be:
 *
 * {
 * 	"success": "true"
 * }
 *
 * If the password does NOT match, the response will instead be:

 * {
 * 	"success": "false"
 * }
 * @source https://developer.bigcommerce.com/api-reference/4fc9e572f701d-validate-a-password
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { customer_id } = req.query;
		const { password } = req.body;

		let endpoint = `/v2/customers/${customer_id}/validate`;

		const body = {
			password
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
