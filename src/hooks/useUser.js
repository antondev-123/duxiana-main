import { useEffect, useState } from "react";

/**
 * @description Custom hook that will handle user authentication
 * @returns {object} user
 */
export const useUser = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		user
			? window.localStorage.setItem("bigcommerceCustomer", JSON.stringify(user))
			: window.localStorage.getItem("bigcommerceCustomer")
			? setUser(JSON.parse(window.localStorage.getItem("bigcommerceCustomer")))
			: setUser(null);
	}, [user]);

	return { user };
};
