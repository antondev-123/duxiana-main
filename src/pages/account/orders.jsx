import PropTypes from "prop-types";
import { memo } from "react";
import AccountBottomBanner from "../../components/account/banner/bottom";
import AccountTopBanner from "../../components/account/banner/top";
import AccountMenu from "../../components/account/menu";
import OrderItem from "../../components/account/order";
import { PageContainer } from "../../components/layouts/common/containers";
import RecentlyViewedProducts from "../../components/recently-viewed";
import Seo from "../../components/seo";

/**
 * @description Render memoized account orders page
 * @param {Object} location
 * @returns {React.Component} Memoized account orders page
 */
const AccountOrdersPage = memo(function MemoizedAccountOrdersPage({ location }) {
	// Translations
	const pageNameText = "Orders";
	const pageTitle = "Account Orders";

	return (
		<>
			<Seo location={location} title={pageTitle} />

			<PageContainer>
				<AccountTopBanner />
				<AccountMenu />

				<div className="mx-auto flex max-w-7xl flex-col">
					<h1 className="text-2xl normal-case">{pageNameText}</h1>
					<div className="flex flex-col">
						<OrderItem />
						<OrderItem />
						<OrderItem />
					</div>

					<AccountBottomBanner />
					<RecentlyViewedProducts />
				</div>
			</PageContainer>
		</>
	);
});

AccountOrdersPage.propTypes = {
	location: PropTypes.object
};

export default AccountOrdersPage;
