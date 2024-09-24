import PropTypes from "prop-types";
import React, { memo } from "react";
import AccountBottomBanner from "../../components/account/banner/bottom";
import AccountTopBanner from "../../components/account/banner/top";
import AccountMenu from "../../components/account/menu";
import WishlistItem from "../../components/account/wishlist/item";
import { PageContainer } from "../../components/layouts/common/containers";
import RecentlyViewedProducts from "../../components/recently-viewed";
import Seo from "../../components/seo";

/**
 * @description Render memoized account orders page
 * @param {Object} location
 * @returns {React.Component} Memoized account orders page
 */
const AccountWishlistsPage = memo(function MemoizedAccountWishlistsPage({ location }) {
	// Translations
	const pageNameText = "Wishlists";
	const pageTitle = "Wishlists";

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
			<Seo location={location} title={pageNameText} />

			<PageContainer>
				<AccountTopBanner />
				<AccountMenu />
				<div className="mx-auto flex max-w-7xl flex-col">
					<h1 className="text-2xl normal-case">{pageTitle}</h1>
					<div className="flex flex-col border">
						<div className="flex flex-row items-center justify-between px-6 py-3">
							<p className="m-0 text-base text-gray-400">My Wishlist</p>
						</div>
						<div className="flex flex-col border-t px-6 ">
							{orderList.map((item, index) => {
								return (
									<React.Fragment key={index}>
										{index > 0 && <div className="h-[1px] w-full border-t" />}
										<WishlistItem />
									</React.Fragment>
								);
							})}
						</div>
					</div>
					<AccountBottomBanner />
					<RecentlyViewedProducts />
				</div>
			</PageContainer>
		</>
	);
});

AccountWishlistsPage.propTypes = {
	location: PropTypes.object
};

export default AccountWishlistsPage;
