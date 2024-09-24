import { memo } from "react";
import LikeIcon from "../../../../images/icon-like.inline.svg";
import LinkIcon from "../../../../images/icon-link.inline.svg";
import MoreIcon from "../../../../images/icon-more.inline.svg";
import { convertStringToTitleCase } from "../../../../utils/convertValues";

/**
 * @description Render memoized wishlist item component
 * @returns {React.Component} Memoized wishlist item component
 */
const WishlistItem = memo(function MemoizedWishlistItem() {
	// Translations
	const likeIconText = "Like Icon";
	const historyIconText = "History Icon";
	const moreIconText = "More Icon";
	const historyText = "History";
	const moreText = "More";

	return (
		<div className="my-6 flex flex-row items-center justify-between">
			<div className="flex flex-row items-center gap-3">
				<div className="flex h-12 w-12 items-center justify-center border border-gray-400">
					<LikeIcon title={convertStringToTitleCase(likeIconText)} />
				</div>
				<div className="flex flex-col">
					<p className="m-0 text-lg font-bold text-black">City Apartment</p>
					<span className="text-sm text-gray-600">3 Items</span>
				</div>
			</div>
			<div className="flex flex-col">
				<p className="m-0 text-xs text-gray-600">Shared wishlist:</p>
				<span className="text-sm font-bold text-black">Yes</span>
			</div>
			<div className="flex flex-row gap-2">
				<div className="ml-2 flex flex-row items-center justify-center gap-2 border px-10 py-2 text-base font-bold text-black">
					<LinkIcon title={convertStringToTitleCase(historyIconText)} />
					<span>{convertStringToTitleCase(historyText)}</span>
				</div>
				<div className="ml-2 flex flex-row items-center justify-center gap-2 border px-10 py-2 text-base font-bold text-black">
					<MoreIcon title={convertStringToTitleCase(moreIconText)} />
					<span>{convertStringToTitleCase(moreText)}</span>
				</div>
			</div>
		</div>
	);
});

export default WishlistItem;
