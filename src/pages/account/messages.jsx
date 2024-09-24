import PropTypes from "prop-types";
import { memo, useState } from "react";
import AccountTopBanner from "../../components/account/banner/top";
import AccountMenu from "../../components/account/menu";
import SimpleComboBox from "../../components/comboboxes/simple";
import { PageContainer } from "../../components/layouts/common/containers";
import RecentlyViewedProducts from "../../components/recently-viewed";
import Seo from "../../components/seo";
import HistoryIcon from "../../images/icon-history.inline.svg";
import { convertStringToTitleCase } from "../../utils/convertValues";

/**
 * @description Render memoized account orders page
 * @param {Object} location
 * @returns {React.Component} Memoized account orders page
 */
const AccountMessagesPage = memo(function MemoizedAccountMessagesPage({ location }) {
	// Translations
	const pageNameText = "Messages";
	const pageTitle = "Messages";
	const historyText = "History";
	const subjectText = "Subject";
	const messageText = "Message";
	const sendMessageText = "Send Message";
	const sendAMessageText = "Send a message";

	// Variables
	const orderList = [
		{ id: 1, name: "Order #10923 - Placed on September 21, 2021 for $23,320.09" },
		{ id: 2, name: "Order #10924 - Placed on September 22, 2021 for $2,330.09" },
		{ id: 3, name: "Order #10925 - Placed on September 23, 2021 for $2,332,270.09" },
		{ id: 4, name: "Order #10926 - Placed on September 24, 2021 for $23.09" },
		{ id: 5, name: "Order #10927 - Placed on September 25, 2021 for $233.09" },
		{ id: 6, name: "Order #10928 - Placed on September 26, 2021 for $332,320.09" }
	];

	const [order, setOrder] = useState(orderList[0]);

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<AccountTopBanner />
				<AccountMenu />

				<div className="mx-auto flex max-w-7xl flex-col">
					<h1 className="text-2xl normal-case">{pageTitle}</h1>
					<div className="flex flex-col border">
						<div className="flex flex-row items-center justify-between px-6 py-3">
							<p className="m-0 text-base text-gray-400">{sendAMessageText}</p>
							<div className="ml-2 flex flex-row items-center justify-center gap-2 border px-10 py-2 text-base font-bold text-black">
								<HistoryIcon />
								<span>{historyText}</span>
							</div>
						</div>
						<div className="flex flex-col border-t p-6">
							<SimpleComboBox
								label={"Order:"}
								items={orderList}
								selectedItem={order}
								onChangeValue={(item) => setOrder(item)}
							/>
							<div className="mt-2">
								<label htmlFor="subject" className="text-sm font-medium text-gray-400">
									{convertStringToTitleCase(subjectText) + ":"}
								</label>
								<div className="mt-1">
									<input
										type="text"
										id="subject"
										className="mt-1 w-full border border-gray-400 bg-white shadow-sm focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600 sm:text-sm"
									/>
								</div>
							</div>
							<div className="mt-2">
								<label htmlFor="message" className="text-sm font-medium text-gray-400">
									{convertStringToTitleCase(messageText) + ":"}
								</label>
								<div className="mt-1">
									<textarea
										id="message"
										rows={3}
										className="mt-1 w-full border border-gray-400 bg-white shadow-sm focus:border-gray-600 focus:outline-none focus:ring-0  focus:ring-gray-600 sm:text-sm "
									/>
								</div>
							</div>
							<button
								type="submit"
								className="mt-3 inline-flex h-14 w-48 items-center justify-center self-end bg-black text-white"
							>
								{convertStringToTitleCase(sendMessageText)}
							</button>
						</div>
					</div>
					<RecentlyViewedProducts />
				</div>
			</PageContainer>
		</>
	);
});

AccountMessagesPage.propTypes = {
	location: PropTypes.object
};

export default AccountMessagesPage;
