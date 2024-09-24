import jwt from "jsonwebtoken";
import { uuid as uuidv4 } from "uuid";
import {
	BIGCOMMERCE_API_CLIENT_ID,
	BIGCOMMERCE_API_SECRET,
	BIGCOMMERCE_API_SITE_URL,
	BIGCOMMERCE_API_STORE_HASH
} from "../../../constants/bigcommerce";
import BigCommerce from "../../../libs/bigcommerce";

/**
 * @description The customer login access point URL.
 * @source https://developer.bigcommerce.com/api-reference/78aacc0954b2c-login-token
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { customer_id } = req.query;

		const dateCreated = Math.round(new Date().getTime() / 1000);
		const payload = {
			iss: BIGCOMMERCE_API_CLIENT_ID,
			iat: dateCreated,
			jti: uuidv4(),
			operation: "customer_login",
			store_hash: BIGCOMMERCE_API_STORE_HASH,
			customer_id
		};

		let jwtToken = jwt.sign(payload, BIGCOMMERCE_API_SECRET, { algorithm: "HS256" });
		let endpoint = `${BIGCOMMERCE_API_SITE_URL}/login/token/${jwtToken}`;

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
