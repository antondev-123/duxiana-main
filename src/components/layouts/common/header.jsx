/* eslint-disable jsx-a11y/no-redundant-roles */
import { memo, useState } from "react";
import {
	BedBottomHeaderListItem,
	BeddingBottomHeaderListItem,
	BeddingTopHeaderListItem,
	BedTopHeaderListItem,
	FurnitureBottomHeaderListItem,
	FurnitureTopHeaderListItem,
	SiteInfoHeaderListItem,
	WhyDuxBottomHeaderListItem,
	WhyDuxTopHeaderListItem
} from "../../../components/lists/items/header";
import {
	bedBottomDefaultValues,
	bedDefaultValues,
	beddingTopDefaultValues,
	furnitureBottomDefaultValues,
	furnitureTopDefaultValues,
	secondaryNavLinks,
	siteInfoDefaultValues,
	whyDuxBottomDefaultValues,
	whyDuxTopDefaultValues
} from "../../../constants/menus";
import {
	BEDDING_PAGE,
	BEDS_PAGE,
	BED_ACCESSORIES_PAGE,
	FURNITURES_PAGE,
	HOME_PAGE,
	TRY_AT_HOTEL_PAGE
} from "../../../constants/page-links";
import { headerSocialLinks } from "../../../constants/social";
import { useMenu } from "../../../hooks/useMenu";
import DuxianaSiteLogoImage from "../../../images/duxiana-logo.inline.svg";
import { convertStringToTitleCase, convertStringToUppercase } from "../../../utils/convertValues";

/**
 * @description Render memoized main header component
 * @return {React.Component} Memoized main header component
 */
const Header = memo(function MemoizedHeader() {
	const [expandedMenu, setExpandedMenu] = useState({ item: "/", status: false });
	const [category, setCategory] = useState("");

	// Hooks
	const { mainMenu, bedsMenu, furnituresMenu, beddingsMenu, whyDuxMenu, professionalMenu, aboutUsMenu, newsEventMenu } =
		useMenu();

	// Translations
	const duxianaSiteLogoImageTitleText = "Duxiana Site Logo";
	const followUsText = "Follow Us";
	const bedsText = "Beds";
	const theDuxBedLineupText = "The Dux Bed Lineup";
	const discoverOurBedModelsText = "Discover our bed models";
	const showAllBedsText = "Show All Beds";
	const bedAccessoriesText = "Bed Accessories";
	const allText = "All";
	const adjustableBedsText = "Adjustable Beds";
	const continentalBedsText = "Continental Beds";
	const frameBedsText = "Frame Beds";
	const mattressesText = "Mattresses";
	const showAllBedAccessoriesText = "Show All Bed Accessories";
	const primaryNavigationLabelText = "Beds Furniture Bedding Why Dux Try At Hotel More";
	const showAllFurnitureText = "Show All Furniture";
	const beddingText = "Bedding";
	const showAllBeddingsText = "Show All Beddings";
	const whyDuxText = "Why Dux";
	const furnitureText = "Furniture";
	const productFilterText = "Product Filter";
	const tryAtHotelText = "Try At Hotel";
	const moreText = "More";

	return (
		<header className={`header ${expandedMenu?.status ? "header--expanded" : ""}`}>
			<div>
				<div className="header__logo">
					<a href={HOME_PAGE}>
						<DuxianaSiteLogoImage title={convertStringToTitleCase(duxianaSiteLogoImageTitleText)} />
					</a>
				</div>
				<div className="header__main">
					<nav className="primary-navigation">
						<ul role="menu" aria-label={convertStringToTitleCase(primaryNavigationLabelText)}>
							<li
								className={`primary-navigation__item has-children is-dropdown ${
									expandedMenu?.item === "beds"
										? expandedMenu?.status
											? "primary-navigation__item--expanded"
											: ""
										: ""
								}`}
								role="menuitem"
								aria-haspopup="true"
								aria-expanded={expandedMenu?.item === "beds" ? expandedMenu?.status : false}
								aria-label={convertStringToTitleCase(
									mainMenu?.data?.[0]?.menu?.[0]?.contentLink?.expanded?.name || bedsText
								)}
							>
								<a
									href="#"
									onClick={() =>
										setExpandedMenu({
											item: "beds",
											status: expandedMenu?.item !== "beds" ? true : !expandedMenu?.status
										})
									}
									className="toggle-dropdown"
									role="button"
									tabIndex="0"
									aria-label={convertStringToTitleCase(
										mainMenu?.data?.[0]?.menu?.[0]?.contentLink?.expanded?.name || bedsText
									)}
								>
									{convertStringToTitleCase(mainMenu?.data?.[0]?.menu?.[0]?.contentLink?.expanded?.name || bedsText)}
								</a>

								<div className="primary-navigation__dropdown">
									<div className="primary-navigation__dropdown-inner">
										<div className="primary-navigation__list">
											<div className="primary-navigation__list-header">
												<p className="primary-navigation__list-header-heading">
													{convertStringToUppercase(
														mainMenu?.data?.[0]?.menu?.[0]?.contentLink?.expanded?.titleTop || theDuxBedLineupText
													)}
												</p>

												<p className="primary-navigation__list-header-description">
													{convertStringToUppercase(
														mainMenu?.data?.[0]?.menu?.[0]?.contentLink?.expanded?.descriptionTop ||
															discoverOurBedModelsText
													)}
												</p>

												<div className="primary-navigation__list-header-cta">
													<div className="primary-navigation__list-header-buttons">
														<a
															href={
																mainMenu?.data?.[0]?.menu?.[0]?.contentLink?.expanded?.showAllLinkTop?.url || BEDS_PAGE
															}
															className="btn btn--primary btn--small"
														>
															<span>
																{convertStringToTitleCase(
																	mainMenu?.data?.[0]?.menu?.[0]?.contentLink?.expanded?.showAllLinkTop?.text ||
																		showAllBedsText
																)}
															</span>
														</a>

														<a
															href={
																mainMenu?.data?.[0]?.menu?.[0]?.contentLink?.expanded?.secondaryLinkTop?.url ||
																BED_ACCESSORIES_PAGE
															}
															className="btn btn--secondary btn--small"
														>
															<span>
																{convertStringToTitleCase(
																	mainMenu?.data?.[0]?.menu?.[0]?.contentLink?.expanded?.secondaryLinkTop?.text ||
																		bedAccessoriesText
																)}
															</span>
														</a>
													</div>

													<div
														className="filter"
														role="navigation"
														aria-label={convertStringToTitleCase(productFilterText)}
													>
														<ul className="filter__list">
															<li
																className={`filter__list-item ${category === "" ? "filter__list-item--current" : ""}`}
															>
																<a role="button" href="#" data-filter="" onClick={() => setCategory("")}>
																	{allText}
																</a>
															</li>
															<li
																className={`filter__list-item ${
																	category === "BedAdjustableBed" ? "filter__list-item--current" : ""
																}`}
															>
																<a
																	role="button"
																	href="#"
																	data-filter="BedAdjustableBed"
																	onClick={() => setCategory("BedAdjustableBed")}
																>
																	{adjustableBedsText}
																</a>
															</li>
															<li
																className={`filter__list-item ${
																	category === "BedContinental" ? "filter__list-item--current" : ""
																}`}
															>
																<a
																	role="button"
																	href="#"
																	data-filter="BedContinental"
																	onClick={() => setCategory("BedContinental")}
																>
																	{convertStringToTitleCase(continentalBedsText)}
																</a>
															</li>
															<li
																className={`filter__list-item ${
																	category === "BedFrameBed" ? "filter__list-item--current" : ""
																}`}
															>
																<a
																	role="button"
																	href="#"
																	data-filter="BedFrameBed"
																	onClick={() => setCategory("BedFrameBed")}
																>
																	{convertStringToTitleCase(frameBedsText)}
																</a>
															</li>
															<li
																className={`filter__list-item ${
																	category === "BedMattress" ? "filter__list-item--current" : ""
																}`}
															>
																<a
																	role="button"
																	href="#"
																	data-filter="BedMattress"
																	onClick={() => setCategory("BedMattress")}
																>
																	{convertStringToTitleCase(mattressesText)}
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>

											<ul
												className={`primary-navigation__list--count-
															${mainMenu?.data?.[0]?.menu?.[0]?.contentLink?.expanded?.itemsPerRowTop || 3}`}
											>
												{bedsMenu?.data?.subMenusTop?.map((item, index) => (
													<BedTopHeaderListItem
														key={index}
														item={item.contentLink?.expanded || {}}
														defaultValue={bedDefaultValues[index]}
														categoryState={category}
													/>
												)) ?? null}
											</ul>

											<p className="primary-navigation__list-bottom-title">
												{convertStringToTitleCase(
													mainMenu?.data?.[0]?.menu?.[0]?.contentLink?.expanded?.titleBottom?.value ||
														convertStringToTitleCase(bedAccessoriesText)
												)}
											</p>

											<ul
												className={`primary-navigation__list--count-${
													mainMenu?.data?.[0]?.menu?.[0]?.contentLink?.expanded?.itemsPerRowBottom || 4
												}`}
											>
												{bedsMenu?.data?.subMenusBottom?.map((item, index) => (
													<BedBottomHeaderListItem
														key={index}
														item={item.contentLink?.expanded || {}}
														defaultValue={bedBottomDefaultValues[index]}
													/>
												)) ?? null}
											</ul>

											<div className="primary-navigation__list-cta">
												<a
													href={bedsMenu?.data?.showAllLinkBottom?.url || BED_ACCESSORIES_PAGE}
													className="btn btn--primary btn--small"
												>
													<span>
														{convertStringToTitleCase(
															bedsMenu?.data?.showAllLinkBottom?.text || showAllBedAccessoriesText
														)}
													</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</li>

							<li
								className={`primary-navigation__item has-children is-dropdown ${
									expandedMenu?.item === "furniture"
										? expandedMenu?.status
											? "primary-navigation__item--expanded"
											: ""
										: ""
								}`}
								role="menuitem"
								aria-haspopup="true"
								aria-expanded={expandedMenu?.item === "furniture" ? expandedMenu?.status : false}
								aria-label={convertStringToTitleCase(
									mainMenu?.data?.[0]?.menu?.[1]?.contentLink?.expanded?.name || furnitureText
								)}
							>
								<a
									href="#"
									onClick={() =>
										setExpandedMenu({
											item: "furniture",
											status: expandedMenu?.item !== "furniture" ? true : !expandedMenu?.status
										})
									}
									className="toggle-dropdown"
									role="button"
									tabIndex="0"
									aria-label={convertStringToTitleCase(
										mainMenu?.data?.[0]?.menu?.[1]?.contentLink?.expanded?.name || furnitureText
									)}
								>
									{convertStringToTitleCase(
										mainMenu?.data?.[0]?.menu?.[1]?.contentLink?.expanded?.name || furnitureText
									)}
								</a>

								<div className="primary-navigation__dropdown">
									<div className="primary-navigation__dropdown-inner">
										<div className="primary-navigation__list">
											<ul
												className={`primary-navigation__list--count-${
													mainMenu?.data?.[0]?.menu?.[1]?.contentLink?.expanded?.itemsPerRowTop || 1
												}
													`}
											>
												{furnituresMenu?.data?.subMenusTop
													?.slice(0, furnitureTopDefaultValues.length)
													?.map((item, index) => (
														<FurnitureTopHeaderListItem
															key={index}
															item={item.contentLink?.expanded || {}}
															defaultValue={furnitureTopDefaultValues[index]}
														/>
													)) ?? null}
											</ul>

											<ul
												className={`primary-navigation__list--count-${
													mainMenu?.data?.[0]?.menu?.[1]?.contentLink?.expanded?.itemsPerRowBottom || 4
												}`}
											>
												{furnituresMenu?.data?.subMenusBottom
													?.slice(0, furnitureBottomDefaultValues.length)
													?.map((item, index) => (
														<FurnitureBottomHeaderListItem
															key={index}
															item={item.contentLink?.expanded || {}}
															defaultValue={furnitureBottomDefaultValues[index]}
														/>
													)) ?? null}
											</ul>

											<div className="primary-navigation__list-cta">
												<a
													href={furnituresMenu?.data?.showAllLinkBottom?.url || FURNITURES_PAGE}
													className="btn btn--primary btn--small"
												>
													<span>
														{convertStringToTitleCase(
															furnituresMenu?.data?.showAllLinkBottom?.text || showAllFurnitureText
														)}
													</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</li>

							<li
								className={`primary-navigation__item has-children is-dropdown ${
									expandedMenu?.item === "bedding"
										? expandedMenu?.status
											? "primary-navigation__item--expanded"
											: ""
										: ""
								}`}
								role="menuitem"
								aria-haspopup="true"
								aria-expanded={expandedMenu?.item === "bedding" ? expandedMenu?.status : false}
								aria-label={convertStringToTitleCase(
									mainMenu?.data?.[0]?.menu?.[2]?.contentLink?.expanded?.name || beddingText
								)}
							>
								<a
									href="#"
									onClick={() =>
										setExpandedMenu({
											item: "bedding",
											status: expandedMenu?.item !== "bedding" ? true : !expandedMenu?.status
										})
									}
									className="toggle-dropdown"
									role="button"
									tabIndex="0"
									aria-label={convertStringToTitleCase(
										mainMenu?.data?.[0]?.menu?.[2]?.contentLink?.expanded?.name || beddingText
									)}
								>
									{convertStringToTitleCase(mainMenu?.data?.[0]?.menu?.[2]?.contentLink?.expanded?.name || beddingText)}
								</a>

								<div className="primary-navigation__dropdown">
									<div className="primary-navigation__dropdown-inner">
										<div className="primary-navigation__list">
											<ul
												className={`primary-navigation__list--count-
															${mainMenu?.data?.[0]?.menu?.[2]?.contentLink?.expanded?.itemsPerRowTop || 1}`}
											>
												{beddingsMenu?.data?.subMenusTop?.map((item, index) => (
													<BeddingTopHeaderListItem
														key={index}
														item={item.contentLink?.expanded || {}}
														defaultValue={beddingTopDefaultValues[index]}
													/>
												))}
											</ul>

											<ul
												className={`primary-navigation__list--count-${
													mainMenu?.data?.[0]?.menu?.[2]?.contentLink?.expanded?.itemsPerRowBottom || 3
												}`}
											>
												{beddingsMenu?.data?.subMenusBottom?.map((item, index) => (
													<BeddingBottomHeaderListItem
														key={index}
														item={item.contentLink?.expanded || {}}
														defaultValue={bedBottomDefaultValues[index]}
													/>
												)) ?? null}
											</ul>

											<div className="primary-navigation__list-cta">
												<a
													href={beddingsMenu?.data?.showAllLinkBottom?.url || BEDDING_PAGE}
													className="btn btn--primary btn--small"
												>
													<span>
														{convertStringToTitleCase(
															beddingsMenu?.data?.showAllLinkBottom?.text || showAllBeddingsText
														)}
													</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</li>

							<li
								className={`primary-navigation__item has-children is-dropdown ${
									expandedMenu?.item === "whydux"
										? expandedMenu?.status
											? "primary-navigation__item--expanded"
											: ""
										: ""
								}`}
								role="menuitem"
								aria-haspopup="true"
								aria-expanded={expandedMenu?.item === "whydux" ? expandedMenu?.status : false}
								aria-label={convertStringToTitleCase(
									mainMenu?.data?.[0]?.menu?.[3]?.contentLink?.expanded?.name || whyDuxText
								)}
							>
								<a
									href="#"
									onClick={() =>
										setExpandedMenu({
											item: "whydux",
											status: expandedMenu?.item !== "whydux" ? true : !expandedMenu?.status
										})
									}
									className="toggle-dropdown"
									role="button"
									tabIndex="0"
									aria-label={convertStringToTitleCase(
										mainMenu?.data?.[0]?.menu?.[3]?.contentLink?.expanded?.name || whyDuxText
									)}
								>
									{convertStringToTitleCase(mainMenu?.data?.[0]?.menu?.[3]?.contentLink?.expanded?.name || whyDuxText)}
								</a>

								<div className="primary-navigation__dropdown">
									<div className="primary-navigation__dropdown-inner">
										<div className="primary-navigation__list">
											<ul
												className={`primary-navigation__list--count-
															${mainMenu?.data?.[0]?.menu?.[3]?.contentLink?.expanded?.itemsPerRowTop || 1}`}
											>
												{whyDuxMenu?.data?.subMenusTop?.map((item, index) => (
													<WhyDuxTopHeaderListItem
														key={index}
														item={item.contentLink?.expanded || {}}
														defaultValue={whyDuxTopDefaultValues[index]}
														categoryState={category}
													/>
												)) ?? null}
											</ul>

											<ul
												className={`primary-navigation__list--count-${
													mainMenu?.data?.[0]?.menu?.[3]?.contentLink?.expanded?.itemsPerRowBottom || 4
												}`}
											>
												{whyDuxMenu?.data?.subMenusBottom?.map((item, index) => (
													<WhyDuxBottomHeaderListItem
														key={index}
														item={item.contentLink?.expanded || {}}
														defaultValue={whyDuxBottomDefaultValues[index]}
													/>
												)) ?? null}
											</ul>
										</div>
									</div>
								</div>
							</li>

							<li
								className="primary-navigation__item"
								role="menuitem"
								aria-label={convertStringToTitleCase(
									mainMenu?.data?.[0]?.menu?.[5]?.contentLink?.expanded?.name || tryAtHotelText
								)}
							>
								<a href={mainMenu?.data?.[0]?.menu?.[5]?.contentLink?.expanded?.page?.url || TRY_AT_HOTEL_PAGE}>
									{convertStringToTitleCase(tryAtHotelText)}
								</a>
							</li>

							<li
								className={`primary-navigation__item has-children is-dropdown more-dropdown ${
									expandedMenu?.item === "more"
										? expandedMenu?.status
											? "primary-navigation__item--expanded"
											: ""
										: ""
								}`}
								role="menuitem"
								aria-haspopup="true"
								aria-expanded={expandedMenu?.item === "more" ? expandedMenu?.status : false}
								aria-label={convertStringToTitleCase(moreText)}
							>
								<a
									href="#"
									onClick={() =>
										setExpandedMenu({
											item: "more",
											status: expandedMenu?.item !== "more" ? true : !expandedMenu?.status
										})
									}
									className="toggle-dropdown"
									role="button"
									tabIndex="0"
									aria-label={convertStringToTitleCase(moreText)}
								>
									{convertStringToTitleCase(moreText)}
								</a>

								<div className="primary-navigation__dropdown">
									<div className="primary-navigation__dropdown-inner">
										<div className="primary-navigation__list">
											<ul className="primary-navigation__list--count-3">
												<SiteInfoHeaderListItem
													item={professionalMenu?.data || {}}
													defaultValue={siteInfoDefaultValues[0]}
												/>

												<SiteInfoHeaderListItem
													item={aboutUsMenu?.data || {}}
													defaultValue={siteInfoDefaultValues[1]}
												/>

												<SiteInfoHeaderListItem
													item={newsEventMenu?.data || {}}
													defaultValue={siteInfoDefaultValues[2]}
												/>
											</ul>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</nav>
				</div>

				{secondaryNavLinks?.length > 0 && headerSocialLinks?.length > 0 ? (
					<div className="header__sub" aria-label="stores global search">
						<div className="header__sub-inner">
							<div className="secondary-navigation" aria-label="stores global search">
								<ul role="list">
									{secondaryNavLinks.map(({ url, title, label }, index) => {
										return (
											<li
												key={index}
												className={`secondary-navigation__item secondary-navigation--${label}`}
												role="listitem"
											>
												<a href={url} id={label}>
													{title}
												</a>
											</li>
										);
									})}
								</ul>
							</div>

							<p className="header__follow">
								{followUsText}
								{headerSocialLinks.map(({ url, icon, title }, index) => {
									return (
										<a key={index} href={url} target="_blank" rel="noopener noreferrer" title={title}>
											<span className="sr-only">{title}</span>
											{icon}
										</a>
									);
								})}
							</p>
						</div>
					</div>
				) : null}
			</div>
		</header>
	);
});

export default Header;
