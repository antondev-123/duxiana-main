import { memo } from "react";
import AccountTopBannerImage from "../../../images/banners/account/top";

/**
 * @description Render memoized account top banner component
 * @return {React.Element} Memoized account top banner component
 */
const AccountTopBanner = memo(function MemoizedAccountbanner() {
	// Translations
	const myDuxText = "My Dux";
	const welcomeText = "Welcome back";
	const logoutText = "Logout";
	const infoText = "This is your account. Track your orders, review wishlist, update your address book, and more";

	return (
		<div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden bg-black py-4 px-6">
			<div className="absolute inset-0 h-full w-full opacity-[0.48]">
				<AccountTopBannerImage />
			</div>

			<section className="relative w-full max-w-2xl px-6 py-4">
				<span className="absolute inset-0 z-10 h-full w-full bg-black opacity-20" />
				<div className="relative z-30 flex flex-col items-center justify-center gap-3 py-4 px-6">
					<h4 className="text-center text-xl font-normal uppercase leading-7 text-gray-1000">{myDuxText}</h4>
					<span className="flex items-center justify-between gap-x-3 text-center">
						<h1 className="text-4xl font-bold leading-9 text-white">{welcomeText}, Tom</h1>
						<button type="button" className="text-sm font-light text-white underline">
							{logoutText}
						</button>
					</span>
					<p className="text-center text-xl font-thin leading-7 text-white">{infoText}.</p>
				</div>
			</section>
		</div>
	);
});

export default AccountTopBanner;
