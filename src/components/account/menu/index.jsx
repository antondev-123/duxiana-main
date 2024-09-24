import { memo } from "react";
import MenuItem from "./item";

/**
 * @description Render memoized account menu component
 * @returns {React.Component} Memoized account menu component
 */
const AccountMenu = memo(function MemoizedAccountMenu() {
	const accountMenuItems = [
		{
			title: "Orders",
			url: "/account/orders"
		},
		{
			title: "Messages",
			url: "/account/messages"
		},
		{
			title: "Communication Preferences",
			url: "/account/communication-preferences"
		},
		{
			title: "Wishlists",
			url: "/account/wishlists"
		},
		{
			title: "Account Settings",
			url: "/account/settings"
		}
	];

	return (
		<div className="my-6 flex items-center border-y py-4">
			<div className="mx-auto flex w-3/4 flex-row  items-center justify-between ">
				{accountMenuItems.map((value, index) => (
					<MenuItem key={index} {...value} />
				))}
			</div>
		</div>
	);
});

export default AccountMenu;
