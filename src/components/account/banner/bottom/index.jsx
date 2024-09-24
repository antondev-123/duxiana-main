import { memo } from "react";
import AccountBottomBannerImage from "../../../images/banners/account/bottom";

/**
 * @description Render memoized account bottom banner component
 * @return {React.Element} Memoized account bottom banner component
 */
const AccountBottomBanner = memo(function MemoizedAccountbanner() {
	// Translations
	const titleText = "Superior Duvet Warm";
	const subTitleText = "DUX DUVET";
	const infoText = "Discover our most confortable duvet";

	return (
		<div className="relative my-4 flex h-[400px] w-full items-center justify-center overflow-hidden bg-black">
			<div className="absolute inset-0 h-full w-full">
				<AccountBottomBannerImage className="h-full w-full" />
			</div>

			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

			<div className="absolute bottom-8 left-10 flex flex-col">
				<h2 className="m-0 normal-case text-white">{titleText}</h2>
				<h3 className="m-0 mt-2 text-sm normal-case text-white">{subTitleText}</h3>
				<p className="mt-4 text-sm text-white">{infoText}</p>
			</div>
		</div>
	);
});

export default AccountBottomBanner;
