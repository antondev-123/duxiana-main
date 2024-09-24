import { Tab } from "@headlessui/react";
import PropTypes from "prop-types";
import { memo } from "react";
import AccountTopBanner from "../../components/account/banner/top";
import AccountMenu from "../../components/account/menu";
import AddressBook from "../../components/account/settings/address-book";
import PaymentsSetting from "../../components/account/settings/payments";
import ProfileSettings from "../../components/account/settings/profile";
import { PageContainer } from "../../components/layouts/common/containers";
import Seo from "../../components/seo";
import { classNames } from "../../utils/classnames";
import { convertStringToTitleCase } from "../../utils/convertValues";

/**
 * @description Render memoized account orders page
 * @param {Object} location
 * @returns {React.Component} Memoized account orders page
 */
const AccountSettings = memo(function MemoizedAccountSettings({ location }) {
	// Translations
	const pageNameText = "Account Settings";
	const pageTitle = "Account Settings";
	const profileSettingsText = "Profile Settings";
	const addressBookText = "Address Book";
	const paymentsText = "Payments";

	// Variables
	const tabClassName = ({ selected }) =>
		classNames(
			"flex-1 text-base text-black focus-visible:outline-none border",
			selected ? "bg-white border-b-0" : "bg-gray-100"
		);

	return (
		<>
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<AccountTopBanner />
				<AccountMenu />

				<div className="mx-auto flex max-w-7xl flex-col">
					<h1 className="text-2xl normal-case">{pageTitle}</h1>
					<div className="flex flex-col">
						<Tab.Group defaultIndex={0}>
							<Tab.List className="flex h-12">
								<Tab className={tabClassName}>{convertStringToTitleCase(profileSettingsText)}</Tab>
								<Tab className={tabClassName}>{convertStringToTitleCase(addressBookText)}</Tab>
								<Tab className={tabClassName}>{convertStringToTitleCase(paymentsText)}</Tab>
							</Tab.List>
							<Tab.Panels className="border border-t-0">
								<Tab.Panel>
									<ProfileSettings />
								</Tab.Panel>
								<Tab.Panel>
									<AddressBook />
								</Tab.Panel>
								<Tab.Panel>
									<PaymentsSetting />
								</Tab.Panel>
							</Tab.Panels>
						</Tab.Group>
					</div>
				</div>
			</PageContainer>
		</>
	);
});

AccountSettings.propTypes = {
	location: PropTypes.object
};

export default AccountSettings;
