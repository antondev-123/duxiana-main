import { useMainSWRConfig } from "./useMainSWRConfig";

/**
 * @description SWR hook for fetching site info data
 * @returns {Object} Site info data
 */
const useSites = () => {
	const {
		data: sites,
		error: sitesError,
		isValidating: isSitesValidating
	} = useMainSWRConfig("/api/optimizely/content-delivery/v3/site/get-sites");

	return {
		sites,
		sitesError,
		isSitesValidating
	};
};

/**
 * @description SWR hook for fetching menu item data
 * @param {Object} options
 * @returns {Object} Menu item data
 */
const useMenuItem = (options = null) => {
	let endpoint = options?.content_reference
		? `/api/optimizely/content-delivery/v2/content-api/get-content-api-by-content-reference?content_reference=${
				options.content_reference
		  }${options?.select ? `&select=${options.select}` : ""}${options?.expand ? `&expand=${options.expand}` : ""}`
		: null;

	const { data: menuItem, error: menuItemError, isValidating: isMenuItemValidating } = useMainSWRConfig(endpoint);

	return {
		menuItem,
		menuItemError,
		isMenuItemValidating
	};
};

/**
 * @description SWR hook for fetching menu item children data
 * @param {Object} options
 * @returns {Object} Menu item children data
 */
const useMenuItemChildren = (options = null) => {
	const endpoint = options?.content_reference
		? `/api/optimizely/content-delivery/v2/content-api/get-content-api-children-by-content-reference?content_reference=${
				options.content_reference
		  }${options?.select ? `&select=${options.select}` : ""}${options?.expand ? `&expand=${options.expand}` : ""}${
				options?.top ? `&top=${options.top}` : ""
		  }`
		: null;

	const {
		data: menuItemChildren,
		error: menuItemChildrenError,
		isValidating: isMenuItemChildrenValidating
	} = useMainSWRConfig(endpoint);

	return {
		menuItemChildren,
		menuItemChildrenError,
		isMenuItemChildrenValidating
	};
};

/**
 * @description SWR hook for fetching menu data
 * @returns {Object} The menu data
 */
export const useMenu = () => {
	// Get the sites data
	const { sites } = useSites();

	// Get the main menu data
	const { menuItemChildren: mainMenu } = useMenuItemChildren({
		content_reference: sites?.data?.[0]?.contentRoots?.startPage?.id,
		expand: "menu",
		top: 1
	});

	// Get the beds menu data
	const { menuItem: bedsMenu } = useMenuItem({
		content_reference: mainMenu?.data?.[0]?.menu?.[0]?.contentLink?.id,
		select: "subMenusTop,subMenusBottom",
		expand: "*"
	});

	// Get the furnitures menu data
	const { menuItem: furnituresMenu } = useMenuItem({
		content_reference: mainMenu?.data?.[0]?.menu?.[1]?.contentLink?.id,
		select: "subMenusTop,subMenusBottom",
		expand: "*"
	});

	// Get the beddings menu data
	const { menuItem: beddingsMenu } = useMenuItem({
		content_reference: mainMenu?.data?.[0]?.menu?.[2]?.contentLink?.id,
		select: "subMenusTop,subMenusBottom",
		expand: "*"
	});

	// Get the why dux menu data
	const { menuItem: whyDuxMenu } = useMenuItem({
		content_reference: mainMenu?.data?.[0]?.menu?.[3]?.contentLink?.id,
		select: "subMenusTop,subMenusBottom",
		expand: "*"
	});

	// Get the professional menu data
	const { menuItemChildren: professionalMenu } = useMenuItemChildren({
		content_reference: mainMenu?.data?.[0]?.menu?.[5]?.contentLink?.expanded?.page?.id,
		expand: "*"
	});

	// Get the about us menu data
	const { menuItemChildren: aboutUsMenu } = useMenuItemChildren({
		content_reference: mainMenu?.data?.[0]?.menu?.[6]?.contentLink?.expanded?.page?.id,
		expand: "*"
	});

	//  Get the news event menu data
	const { menuItemChildren: newsEventMenu } = useMenuItemChildren({
		content_reference: mainMenu?.data?.[0]?.menu?.[7]?.contentLink?.expanded?.page?.id,
		expand: "*"
	});

	return {
		sites,
		mainMenu,
		bedsMenu,
		furnituresMenu,
		beddingsMenu,
		whyDuxMenu,
		professionalMenu,
		aboutUsMenu,
		newsEventMenu
	};
};
