import parse from "html-react-parser";
import PropTypes from "prop-types";
import { memo } from "react";

/**
 * @description Render memoized bed bottom header list item component
 * @param {Object} item
 * @param {Object} defaultValue
 * @returns {React.Component} Memoized bed bottom header list item component
 */
export const BedBottomHeaderListItem = memo(function MemoizedHeaderBedBottomListItem({ item, defaultValue }) {
	const linkJSX = (
		<>
			<div className="primary-navigation__list-item-header">
				<p
					className="primary-navigation__list-item-header-heading"
					aria-label={parse(item?.name || defaultValue?.label || "")}
				>
					{parse(item?.name || defaultValue?.label || "")}
				</p>
			</div>

			<div className="primary-navigation__list-item-image">
				<img
					src={item?.listImage?.value?.url || defaultValue?.imgPath || "#"}
					alt="description"
					placeholder="blurred"
					loading="lazy"
					layout="fixed"
					style={{ height: "140px" }}
				/>
			</div>
		</>
	);

	return (
		<li className="primary-navigation__list-item w-[calc(25%-30px)]">
			<a href={item?.url || defaultValue?.href || "#"}>{linkJSX}</a>
		</li>
	);
});

BedBottomHeaderListItem.propTypes = {
	defaultValue: PropTypes.shape({
		href: PropTypes.string,
		imgPath: PropTypes.string,
		label: PropTypes.string
	}),
	item: PropTypes.shape({
		name: PropTypes.string,
		url: PropTypes.string
	})
};

/**
 * @description Render memoized bedding bottom header list item component
 * @param {Object} item
 * @param {Object} defaultValue
 * @returns {React.Component} Memoized bedding bottom header list item component
 */
export const BeddingBottomHeaderListItem = memo(function MemoizedBeddingBottomHeaderListItem({ item, defaultValue }) {
	// Translations
	const paragraphAriaLabelText = "Base covers &amp; Bed skirts";

	const linkJSX = (
		<>
			<div className="primary-navigation__list-item-header">
				<p
					className="primary-navigation__list-item-header-heading"
					aria-label={parse(item?.listHeading?.value || defaultValue?.label || "")}
				>
					{parse(item?.listHeading?.value || defaultValue?.label || "")}
				</p>
				<p
					className="primary-navigation__list-item-header-sub-heading"
					aria-label={parse(item?.listSubHeading?.value || paragraphAriaLabelText)}
				>
					{parse(item?.listSubHeading?.value || paragraphAriaLabelText)}
				</p>
			</div>
			<div className="primary-navigation__list-item-image">
				<img
					src={item?.listImage?.value?.url || defaultValue?.imgPath || "#"}
					alt="description"
					placeholder="blurred"
					loading="lazy"
					layout="fixed"
					style={{ height: "160px", objectFit: "cover" }}
				/>
			</div>
		</>
	);

	return (
		<li className="primary-navigation__list-item ">
			<a href={item?.url || defaultValue?.href || "#"}>{linkJSX}</a>
		</li>
	);
});

BeddingBottomHeaderListItem.propTypes = {
	defaultValue: PropTypes.shape({
		href: PropTypes.string,
		imgPath: PropTypes.string,
		label: PropTypes.string
	}),
	item: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

/**
 * @description Render memoized bedding top header list item component
 * @param {Object} item
 * @param {Object} defaultValue
 * @returns {React.Component} Memoized bedding top header list item component
 */
export const BeddingTopHeaderListItem = memo(function MemoizedBeddingTopHeaderListItem({ item, defaultValue }) {
	// Translations
	const superiorDuvetWarmLabelText = "Superior Duvet Warm";
	const duxDuvetLabelText = "DUX Duvet";
	const discoverLabelText = "Discover our most comfortable duvet";

	// Links
	const superiorDuvetWarmDownBeddingLink = "/bedding/down/superior-duvet-warm";

	const linkJSX = (
		<>
			<div className="primary-navigation__list-item-header relative z-[1] col-start-1 col-end-2 row-start-1 row-end-2 box-border flex h-full flex-col items-start justify-end border-none p-[calc(15px+(2500vw-19200px)/662)] text-start">
				<p
					className="primary-navigation__list-item-header-heading ml-[-0.05em] text-[calc(22px+(1000vw-7680px)/662)] font-normal normal-case tracking-normal"
					aria-label={parse(item?.listHeading?.value || superiorDuvetWarmLabelText)}
				>
					{parse(item?.listHeading?.value || superiorDuvetWarmLabelText)}
				</p>
				<p
					className="primary-navigation__list-item-header-sub-heading text-transform: mt-[0.1em] text-[calc(10px+(200vw-1536px)/662)] uppercase tracking-[.15em]"
					aria-label={parse(item?.listSubHeading?.value || duxDuvetLabelText)}
				>
					{parse(item?.listSubHeading?.value || duxDuvetLabelText)}
				</p>
				<p className="primary-navigation__list-item-header-description mt-[0.8em] max-w-[50%] whitespace-normal text-[calc(10px+(200vw-1536px)/662)] font-normal normal-case tracking-normal">
					{parse(item?.listImageDescription?.value || discoverLabelText)}
				</p>
			</div>
			<div className="primary-navigation__list-item-image col-start-1 col-end-2 row-start-1 row-end-2">
				<img
					src={item?.listImage?.value?.url || defaultValue?.imgPath || "#"}
					alt="description"
					placeholder="blurred"
					layout="fixed"
					loading="lazy"
					style={{ height: "450px" }}
				/>
			</div>
		</>
	);

	return (
		<li
			style={{ width: "100%" }}
			className="primary-navigation__list-item text-inverted navigation--image-dark"
			data-filter-item="DownDuvet,Down"
		>
			{item?.url ? (
				<a href={item.url} className="grid grid-cols-[1fr] grid-rows-[1fr] ">
					{linkJSX}
				</a>
			) : (
				<a href={defaultValue?.href || "#"}>{linkJSX}</a>
			)}
		</li>
	);
});

BeddingTopHeaderListItem.propTypes = {
	defaultValue: PropTypes.shape({
		imgPath: PropTypes.string
	}),
	item: PropTypes.shape({
		listHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		listImage: PropTypes.shape({
			value: PropTypes.shape({
				url: PropTypes.string
			})
		}),
		listImageDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		listSubHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		url: PropTypes.string
	})
};

/**
 * @description Render memoized bed top header list item component
 * @param {Object} item
 * @param {string} categoryState
 * @param {Object} defaultValue
 * @returns {React.Component} Memoized bed top header list item component
 */
export const BedTopHeaderListItem = memo(function MemoizedBedTopHeaderListItem({ item, defaultValue, categoryState }) {
	const linkJSX = (
		<>
			<div className="primary-navigation__list-item-header">
				<p
					className="primary-navigation__list-item-header-heading"
					aria-label={item?.routeSegment || defaultValue?.label || ""}
				>
					{parse(item?.name || defaultValue?.label || "")}
				</p>
			</div>
			<div className="primary-navigation__list-item-image">
				<img
					src={item?.listImage?.value?.url || defaultValue?.imgPath || "#"}
					alt="description"
					placeholder="blurred"
					layout="fixed"
					loading="lazy"
					style={{ height: "191px" }}
				/>
			</div>
			<div className="primary-navigation__sub-list">
				<p>{item?.payoff?.value || ""}</p>
			</div>
		</>
	);

	return (
		<li
			style={{ display: categoryState === "" || categoryState === defaultValue?.menu ? "" : "none" }}
			className="primary-navigation__list-item "
			data-filter-item={
				item?.productSubCategory?.value + "," + item?.productCategory?.value || defaultValue?.filter_item || ""
			}
		>
			<a href={item?.url || defaultValue?.href || "#"}>{linkJSX}</a>
		</li>
	);
});

BedTopHeaderListItem.propTypes = {
	categoryState: PropTypes.string,
	defaultValue: PropTypes.shape({
		filter_item: PropTypes.string,
		href: PropTypes.string,
		imgPath: PropTypes.string,
		label: PropTypes.string,
		menu: PropTypes.string
	}),
	item: PropTypes.shape({
		listImage: PropTypes.shape({
			value: PropTypes.shape({
				url: PropTypes.string
			})
		}),
		name: PropTypes.string,
		payoff: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		productCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		productSubCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		routeSegment: PropTypes.string,
		url: PropTypes.string
	})
};

/**
 * @description Render memoized furniture bottom header list item component
 * @param {Object} item
 * @param {Object} defaultValue
 * @returns {React.Component} Memoized furniture bottom header list item component
 */
export const FurnitureBottomHeaderListItem = memo(function MemoizedFurnitureBottomHeaderListItem({
	item,
	defaultValue
}) {
	const linkJSX = (
		<>
			<div className="primary-navigation__list-item-header">
				<p
					className="primary-navigation__list-item-header-heading"
					aria-label={parse(item?.name || defaultValue?.label || "")}
				>
					{parse(item?.name || defaultValue?.label || "")}
				</p>
			</div>
			<div className="primary-navigation__list-item-image">
				<img
					src={item?.listImage?.value?.url || defaultValue?.imgPath || "#"}
					alt="description"
					placeholder="blurred"
					layout="fixed"
					loading="lazy"
					style={{ height: "140px", objectFit: "cover" }}
				/>
			</div>
		</>
	);

	return (
		<li className="primary-navigation__list-item w-[calc(25%-30px)]">
			{item?.url ? <a href={item.url}>{linkJSX}</a> : <a href={defaultValue?.href || "#"}>{linkJSX}</a>}
		</li>
	);
});

FurnitureBottomHeaderListItem.propTypes = {
	defaultValue: PropTypes.shape({
		href: PropTypes.string,
		imgPath: PropTypes.string,
		label: PropTypes.string
	}),
	item: PropTypes.shape({
		listImage: PropTypes.shape({
			value: PropTypes.shape({
				url: PropTypes.string
			})
		}),
		name: PropTypes.string,
		url: PropTypes.string
	})
};

/**
 * @description Render memoized furniture top header list item component
 * @param {Object} item
 * @param {Object} defaultValue
 * @returns {React.Component} Memoized furniture top header list item component
 */
export const FurnitureTopHeaderListItem = memo(function MemoizedFurnitureTopHeaderListItem({ item, defaultValue }) {
	// Translations
	const brunoMathssonText = "Bruno Mathsson";
	const discoverLabelText = "Discover our most beloved piece of furniture";

	const linkJSX = (
		<>
			<div className="primary-navigation__list-item-header relative z-[1] col-start-1 col-end-2 row-start-1 row-end-2 box-border flex h-full flex-col items-start justify-end border-none p-[calc(15px+(2500vw-19200px)/662)] text-start ">
				<p
					className="primary-navigation__list-item-header-heading text-[calc(22px+(1000vw-7680px)/662)] normal-case "
					aria-label={parse(item?.name || defaultValue?.label || "")}
				>
					{parse(item?.name || defaultValue?.label || "")}
				</p>
				<p
					className="primary-navigation__list-item-header-sub-heading text-transform: mt-[0.1em] text-[calc(10px+(200vw-1536px)/662)] uppercase tracking-[.15em]"
					aria-label={parse(item?.listSubHeading?.value || brunoMathssonText)}
				>
					{parse(item?.listSubHeading?.value || brunoMathssonText)}
				</p>
				<p className="primary-navigation__list-item-header-description mt-[0.8em] max-w-[50%] whitespace-normal text-[calc(10px+(200vw-1536px)/662)] font-normal normal-case tracking-normal">
					{parse(item?.listImageDescription?.value || discoverLabelText)}
				</p>
			</div>
			<div className="primary-navigation__list-item-image col-start-1 col-end-2 row-start-1 row-end-2 ">
				<img
					src={item?.listImage?.value?.url || defaultValue?.imgPath || "#"}
					alt="description"
					placeholder="blurred"
					layout="fixed"
					loading="lazy"
					style={{ height: "450px", objectFit: "cover" }}
				/>
			</div>
		</>
	);

	return (
		<li
			style={{ width: "100%" }}
			className="primary-navigation__list-item text-inverted navigation--image-dark"
			data-filter-item="FurnitureEasyChair,Furniture"
		>
			{item?.url ? (
				<a href={item.url} className="grid grid-cols-[1fr] grid-rows-[1fr] ">
					{linkJSX}
				</a>
			) : (
				<a href={defaultValue?.href || "#"}>{linkJSX}</a>
			)}
		</li>
	);
});

FurnitureTopHeaderListItem.propTypes = {
	defaultValue: PropTypes.shape({
		href: PropTypes.string,
		imgPath: PropTypes.string,
		label: PropTypes.string
	}),
	item: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

/**
 * @description Render memoized site info header list item component
 * @param {Object} item
 * @param {Object} defaultValue
 * @returns {React.Component} Memoized site info header list item component
 */
export const SiteInfoHeaderListItem = memo(function MemoizedSiteInfoHeaderListItem({ item, defaultValue }) {
	const linkJSX = (
		<>
			<div className="primary-navigation__list-item-header">
				<p
					className="primary-navigation__list-item-header-heading"
					aria-label={parse(item?.name || defaultValue?.label || "")}
				>
					{parse(item?.name || defaultValue?.label || "")}
				</p>
				<p
					className="primary-navigation__list-item-header-description"
					aria-label={parse(item?.listSubHeading?.value || defaultValue?.subLabel || "")}
				>
					{parse(item?.listSubHeading?.value || defaultValue?.subLabel || "")}
				</p>
			</div>
			<div className="primary-navigation__list-item-image">
				<img
					src={item?.listImage?.value?.url || defaultValue?.imgPath || "#"}
					alt="description"
					placeholder="blurred"
					layout="fixed"
					loading="lazy"
					style={{ height: "170px", objectFit: "cover" }}
				/>
			</div>
		</>
	);

	return (
		<li className="primary-navigation__list-item primary-navigation__list-item-more">
			<a href={item?.url || defaultValue?.href || "#"}>{linkJSX}</a>

			<div className="primary-navigation__sub-list primary-navigation__sub-list--has-children">
				<p>{parse(item?.listImageDescription?.value || defaultValue?.imgDescription || "")}</p>

				{defaultValue?.subMenu?.length > 0 ? (
					<ul>
						{defaultValue?.subMenu.map((menu, index) => (
							<li key={index}>
								<a href={menu?.professionalHref || "#"} aria-label={menu?.professionalName || ""}>
									{menu.professionalName || ""}
								</a>
							</li>
						))}
					</ul>
				) : null}
			</div>
		</li>
	);
});

SiteInfoHeaderListItem.propTypes = {
	defaultValue: PropTypes.shape({
		href: PropTypes.string,
		imgDescription: PropTypes.string,
		imgPath: PropTypes.string,
		label: PropTypes.string,
		subLabel: PropTypes.string,
		subMenu: PropTypes.array
	}),
	item: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

/**
 * @description Render memoized why dux bottom header list item component
 * @param {Object} item
 * @param {Object} defaultValue
 * @returns {React.Component} Memoized why dux bottom header list item component
 */
export const WhyDuxBottomHeaderListItem = memo(function MemoizedWhyDuxBottomHeaderListItem({ item, defaultValue }) {
	const linkJSX = (
		<>
			<div className="primary-navigation__list-item-header">
				<p
					className="primary-navigation__list-item-header-heading"
					aria-label={parse(item?.listHeading?.value || defaultValue?.label || "")}
				>
					{parse(item?.listHeading?.value || defaultValue?.label || "")}
				</p>
				<p
					className="primary-navigation__list-item-header-sub-heading"
					aria-label={parse(parse(item?.listSubHeading?.value || defaultValue?.subLabel || ""))}
				>
					{parse(parse(item?.listSubHeading?.value || defaultValue?.subLabel || ""))}
				</p>
			</div>
			<div className="primary-navigation__list-item-image">
				<img
					src={item?.listImage?.value?.url || defaultValue?.imgPath || "#"}
					alt="description"
					placeholder="blurred"
					layout="fixed"
					loading="lazy"
					style={{ height: "160px", objectFit: "cover" }}
				/>
			</div>
		</>
	);

	return (
		<li className="primary-navigation__list-item ">
			<a href={item?.url || defaultValue?.href || "#"}>{linkJSX}</a>
		</li>
	);
});

WhyDuxBottomHeaderListItem.propTypes = {
	defaultValue: PropTypes.shape({
		href: PropTypes.string,
		imgPath: PropTypes.string,
		label: PropTypes.string,
		subLabel: PropTypes.string
	}),
	item: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

/**
 * @description Render memoized why dux top header list item component
 * @param {Object} item
 * @param {Object} defaultValue
 * @returns {React.Component} Memoized why dux top header list item component
 */
export const WhyDuxTopHeaderListItem = memo(function MemoizedWhyDuxTopHeaderListItem({ item, defaultValue }) {
	const linkJSX = (
		<>
			<div className="primary-navigation__list-item-header relative z-[1] col-start-1 col-end-2 row-start-1 row-end-2 box-border flex h-full flex-col items-start justify-end border-none p-[calc(15px+(2500vw-19200px)/662)] text-start">
				<p
					className="primary-navigation__list-item-header-heading  ml-[-0.05em] text-[calc(22px+(1000vw-7680px)/662)] font-normal normal-case tracking-normal"
					aria-label={parse(item?.name || defaultValue?.label || "")}
				>
					{parse(item?.name || defaultValue?.label || "")}
				</p>
				<p
					className="primary-navigation__list-item-header-sub-heading text-transform: mt-[0.1em] text-[calc(10px+(200vw-1536px)/662)] uppercase tracking-[.15em]"
					aria-label={parse(item?.listSubHeading?.value || defaultValue?.subLavel || "")}
				>
					{parse(item?.listSubHeading?.value || defaultValue?.subLavel || "")}
				</p>
			</div>
			<div className="primary-navigation__list-item-image col-start-1 col-end-2 row-start-1 row-end-2">
				<img
					src={item?.listImage?.value?.url || defaultValue?.imgPath || "#"}
					alt="description"
					placeholder="blurred"
					layout="fixed"
					loading="lazy"
					style={{ height: "380px", objectFit: "cover" }}
				/>
			</div>
		</>
	);

	return (
		<li
			style={{ width: "100%" }}
			className="primary-navigation__list-item text-inverted navigation--image-dark"
			data-filter-item=""
		>
			{item?.url ? (
				<a href={item.url} className="grid grid-cols-[1fr] grid-rows-[1fr] ">
					{linkJSX}
				</a>
			) : (
				<a href={defaultValue?.href || "#"}>{linkJSX}</a>
			)}
		</li>
	);
});
