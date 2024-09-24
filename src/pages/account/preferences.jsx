import PropTypes from "prop-types";
import { memo } from "react";
import AccountTopBanner from "../../components/account/banner/top";
import AccountMenu from "../../components/account/menu";
import { PageContainer } from "../../components/layouts/common/containers";
import RecentlyViewedProducts from "../../components/recently-viewed";
import Seo from "../../components/seo";
import { convertStringToLowercase, convertStringToTitleCase } from "../../utils/convertValues";

/**
 * @description Render memoized account orders page
 * @param {Object} location
 * @returns {React.Component} Memoized account orders page
 */
const AccountPreferences = memo(function MemoizedAccountPreferences({ location }) {
	// Translations
	const pageNameText = "Communication Preferences";
	const pageTitle = "Communication Preferences";
	const preferencesText = "Preferences";
	const latestMessageEmailText = "Latest Message Email";
	const sendLatestMessageEmailText = "Send the latest message in email";
	const announcementsText = "Announcements";
	const newProductsFeaturesText = "New products and features as well as occasional company announcement";
	const newsletterText = "Newsletter";
	const bestProductArticleServicesWeekText = "Our best products, articles or services of the week";

	const orderList = [
		{ id: 1, name: "Order #10923 - Placed on September 21, 2021 for $23,320.09" },
		{ id: 2, name: "Order #10924 - Placed on September 22, 2021 for $2,330.09" },
		{ id: 3, name: "Order #10925 - Placed on September 23, 2021 for $2,332,270.09" },
		{ id: 4, name: "Order #10926 - Placed on September 24, 2021 for $23.09" },
		{ id: 5, name: "Order #10927 - Placed on September 25, 2021 for $233.09" },
		{ id: 6, name: "Order #10928 - Placed on September 26, 2021 for $332,320.09" }
	];

	return (
		<>
			<Seo location={location} title={pageTitle} />

			<PageContainer>
				<AccountTopBanner />
				<AccountMenu />

				<div className="mx-auto flex max-w-7xl flex-col">
					<h1 className="text-2xl normal-case">{pageNameText}</h1>
					<div className="flex flex-col border">
						<div className="flex flex-row items-center justify-between px-6 py-3">
							<p className="m-0 text-base text-gray-400">{convertStringToTitleCase(preferencesText)}</p>
						</div>
						<div className="flex flex-col border-t px-6">
							<div className="form-check my-3 flex items-center">
								<input
									className="form-check-input float-left mr-2 h-6 w-6 cursor-pointer appearance-none border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-gray-600 checked:bg-gray-600 focus:shadow-none focus:ring-0 focus:ring-offset-0"
									type="checkbox"
									id="send-latest-email"
								/>
								<div className="flex flex-col">
									<label
										className="form-check-label inline-flex items-center text-base text-gray-600 "
										htmlFor="send-latest-email"
									>
										{convertStringToTitleCase(latestMessageEmailText)}
									</label>
									<span className="text-xs text-gray-400">{sendLatestMessageEmailText}</span>
								</div>
							</div>
							<div className="form-check my-3 flex items-center">
								<input
									className="form-check-input float-left mr-2 h-6 w-6 cursor-pointer appearance-none border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-gray-600 checked:bg-gray-600 focus:shadow-none focus:ring-0 focus:ring-offset-0"
									type="checkbox"
									id="announcements"
								/>
								<div className="flex flex-col">
									<label
										className="form-check-label inline-flex items-center text-base text-gray-600 "
										htmlFor="announcements"
									>
										{convertStringToTitleCase(announcementsText)}
									</label>
									<span className="text-xs text-gray-400">{newProductsFeaturesText}</span>
								</div>
							</div>

							<div className="form-check my-3 flex items-center">
								<input
									className="form-check-input float-left mr-2 h-6 w-6 cursor-pointer appearance-none border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-gray-600 checked:bg-gray-600 focus:shadow-none focus:ring-0 focus:ring-offset-0"
									type="checkbox"
									id="newsletter"
								/>
								<div className="flex flex-col">
									<label
										className="form-check-label inline-flex items-center text-base text-gray-600 "
										htmlFor="newsletter"
									>
										{convertStringToTitleCase(newsletterText)}
									</label>
									<span className="text-xs text-gray-400">
										{convertStringToLowercase(bestProductArticleServicesWeekText)}
									</span>
								</div>
							</div>
						</div>
					</div>
					<RecentlyViewedProducts />
				</div>
			</PageContainer>
		</>
	);
});

AccountPreferences.propTypes = {
	location: PropTypes.object
};

export default AccountPreferences;
