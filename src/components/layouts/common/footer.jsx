import axios from "axios";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { memo, useEffect, useState } from "react";
import { FooterListItem } from "../../../components/lists/items/footer";
import {
	aboutUsDefaultValues,
	bedAccesorriesDefaultValues,
	beddingDefaultValues,
	bedsDefaultValues,
	furnitureDefaultValues,
	whyDuxDefaultValues
} from "../../../constants/menus";
import DuxianaWhiteLogo from "../../../images/duxiana-logo-white.inline.svg";
import { convertStringToTitleCase } from "../../../utils/convertValues";

/**
 * @description Render memoized main footer component
 * @return {React.Component} Memoized main footer component
 */
const Footer = memo(function MemoizedFooter() {
	const [serverData, setServerData] = useState([]);
	const [bedsData, setBedsData] = useState([]);
	const [bedAccesorriesData, setBedAccesorriesData] = useState([]);
	const [beddingData, setBeddingData] = useState([]);
	const [furnitureData, setFurnitureData] = useState([]);
	const [whyDuxData, setWhyDuxData] = useState([]);
	const [professionalData, setProfessionalData] = useState([]);
	const [aboutUsData, setAboutUsData] = useState([]);

	// Translations
	const backToStartPageText = "Back to start page";
	const whiteDuxianaLogoText = "White Duxiana Logo";

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const { data: commonData } = await axios.get("/api/pre-site-info");
			const { content } = commonData;
			setServerData(commonData.content);

			const { data: data1 } = await axios.post("/api/get-content-children", {
				mainData: content[1].contentLink.id
			});
			setBedsData(data1.props);

			const { data: data2 } = await axios.post("/api/get-content-children", {
				mainData: content[4].contentLink.id
			});
			setBedAccesorriesData(data2.props);

			const { data: data3 } = await axios.post("/api/get-content-children", {
				mainData: content[5].contentLink.id
			});
			setBeddingData(data3.props);

			const { data: data4 } = await axios.post("/api/get-content-children", {
				mainData: content[6].contentLink.id
			});
			setFurnitureData(data4.props);

			const { data: data5 } = await axios.post("/api/get-content-children", {
				mainData: content[8].contentLink.id
			});
			setWhyDuxData(data5.props);

			const { data: data6 } = await axios.post("/api/get-content-children", {
				mainData: content[9].contentLink.id
			});
			setProfessionalData(data6.props);

			const { data: data7 } = await axios.post("/api/get-content-children", {
				mainData: content[10].contentLink.id
			});
			setAboutUsData(data7.props);

			// console.log(data6.props)
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<footer className="px-[calc(1.75rem * 2)] flex items-center justify-center bg-black py-0 text-white">
			<nav className="w-[67.5rem] max-w-[90vw] flex-row flex-wrap px-0 py-[3%]" aria-label="footer">
				<div className="footer__logo mb-[calc(1.75rem * 2)]">
					<Link to="/">
						<DuxianaWhiteLogo title={convertStringToTitleCase(whiteDuxianaLogoText)} />
						<span className="sr-only">{backToStartPageText}</span>
					</Link>
				</div>
				<ul className="w-[calc(100% + 0.75rem * 2)] my-[calc(-1 * 0.75rem)] mx-0 flex flex-wrap text-[0]">
					<li className="footer-navigation__item w-[calc(24.9% - 0.75rem * 2)] mx-0 mt-[calc(0.75rem)] mb-12">
						<div className="footer-navigation__item-header">
							<div className="footer-navigation__item-header-heading">
								<a href={serverData.length ? serverData[1].url : "/beds"} target="">
									{serverData.length ? serverData[1].name : "Beds"}
								</a>
							</div>
							<p aria-label={serverData.length ? serverData[1].listSubHeading.value.toLowerCase() : "dux"}>
								<span aria-label={serverData.length ? serverData[1].listSubHeading.value.toLowerCase() : "dux"}>
									{serverData.length ? serverData[1].listSubHeading.value : "DUX"}
								</span>
							</p>
						</div>
						<ul
							className="footer__sub-navigation"
							aria-label="dux 1001 dux 1002 bm0555 dux 2002 dux 3003 dux 303 dux 5005 dux 6006 dux 8008 dux axion dux dynamic dux xclusive"
						>
							{bedsData.slice(0, bedsDefaultValues.length).map((item, index) => (
								<FooterListItem key={index} href={item.url} defaultValue={bedsDefaultValues[index]} value={item.name} />
							))}
						</ul>
					</li>
					<li className="footer-navigation__item w-[calc(24.9% - 0.75rem * 2)] mx-0 mt-[calc(0.75rem)] mb-12">
						<div className="footer-navigation__item-header">
							<div className="footer-navigation__item-header-heading">
								<a href={serverData.length ? serverData[4].url : "/bed-accessories"} target="">
									{serverData.length ? serverData[4].name : "Bed Accessories"}
								</a>
							</div>
							<p aria-label={serverData.length ? serverData[4].listSubHeading.value.toLowerCase() : "dux"}>
								<span aria-label={serverData.length ? serverData[4].listSubHeading.value.toLowerCase() : "dux"}>
									{serverData.length ? serverData[4].listSubHeading.value : "DUX"}
								</span>
							</p>
						</div>
						<ul className="footer__sub-navigation" aria-label="headboards top pads legs">
							{bedAccesorriesData.map((item, index) => (
								<FooterListItem
									key={index}
									href={item.url}
									defaultValue={bedAccesorriesDefaultValues[index]}
									value={item.name}
								/>
							))}
						</ul>
					</li>
					<li className="footer-navigation__item w-[calc(24.9% - 0.75rem * 2)] mx-0 mt-[calc(0.75rem)] mb-12">
						<div className="footer-navigation__item-header">
							<div className="footer-navigation__item-header-heading">
								<a href={serverData.length ? serverData[5].url : "/bedding"} target="">
									{serverData.length ? serverData[5].name : "Bedding"}
								</a>
							</div>
							<p aria-label={serverData.length ? serverData[5].listSubHeading.value.toLowerCase() : "dux"}>
								<span aria-label={serverData.length ? serverData[5].listSubHeading.value.toLowerCase() : "dux"}>
									{serverData.length ? serverData[5].listSubHeading.value : "dux"}
								</span>
							</p>
						</div>
						<ul className="footer__sub-navigation" aria-label="bed dressing down linen clothing">
							{beddingData.map((item, index) => (
								<FooterListItem
									key={index}
									href={item.url}
									defaultValue={beddingDefaultValues[index]}
									value={item.name}
								/>
							))}
						</ul>
					</li>
					<li className="footer-navigation__item w-[calc(24.9% - 0.75rem * 2)] mx-0 mt-[calc(0.75rem)] mb-12">
						<div className="footer-navigation__item-header">
							<div className="footer-navigation__item-header-heading">
								<a href={serverData.length ? serverData[6].url : "/furniture"} target="">
									{serverData.length ? serverData[6].name : "Furniture"}
								</a>
							</div>
							<p aria-label={serverData.length ? serverData[6].listSubHeading.value.toLowerCase() : "dux"}>
								<span aria-label={serverData.length ? serverData[6].listSubHeading.value.toLowerCase() : "dux"}>
									{serverData.length ? serverData[6].listSubHeading.value : "DUX"}
								</span>
							</p>
						</div>
						<ul className="footer__sub-navigation" aria-label="chairs easy chairs tables sofas">
							{furnitureData.map((item, index) => (
								<FooterListItem
									key={index}
									href={item.url}
									defaultValue={furnitureDefaultValues[index]}
									value={item.name}
								/>
							))}
						</ul>
					</li>
					<li className="footer-navigation__item w-[calc(24.9% - 0.75rem * 2)] mx-0 mt-[calc(0.75rem)] mb-12">
						<div className="footer-navigation__item-header">
							<div className="footer-navigation__item-header-heading">
								<a href={serverData.length ? serverData[8].url : "/why-dux"} target="">
									{serverData.length ? serverData[8].name : "Why DUX"}
								</a>
							</div>
							<p
								aria-label={
									serverData.length
										? serverData[8].listSubHeading.value.toLowerCase()
										: "all the benefits of the dux bed"
								}
							>
								<span
									aria-label={
										serverData.length ? serverData[8].listSubHeading.value : "All the benefits of the DUX bed"
									}
								>
									{serverData.length ? serverData[8].listSubHeading.value : "All the benefits of the DUX bed"}
								</span>
							</p>
						</div>
						<ul
							className="footer__sub-navigation"
							aria-label="innovation sleep science back pain relief sustainability"
						>
							{whyDuxData.map((item, index) => (
								<FooterListItem
									key={index}
									href={item.url}
									defaultValue={whyDuxDefaultValues[index]}
									value={item.listHeading.value}
								/>
							))}
						</ul>
					</li>
					<li className="footer-navigation__item w-[calc(24.9% - 0.75rem * 2)] mx-0 mt-[calc(0.75rem)] mb-12">
						<div className="footer-navigation__item-header">
							<div className="footer-navigation__item-header-heading">
								<a href={serverData.length ? serverData[9].url : "/professionals"} target="">
									{serverData.length ? serverData[9].name : "Professionals"}
								</a>
							</div>
							<p
								aria-label={serverData.length ? serverData[9].listSubHeading.value.toLowerCase() : "become our partner"}
							>
								<span aria-label={serverData.length ? serverData[9].listSubHeading.value : "Become our partner"}>
									{serverData.length ? serverData[9].listSubHeading.value : "Become our partner"}
								</span>
							</p>
						</div>
						<ul
							className="footer__sub-navigation"
							aria-label={professionalData.length ? professionalData[0].name.toLowerCase() : "press room"}
						>
							{professionalData.map((item, index) => (
								<FooterListItem
									key={index}
									href={item.url}
									defaultValue={{ href: "/professionals/press-room", label: "Press Room" }}
									value={item.name}
								/>
							))}
						</ul>
					</li>
					<li className="footer-navigation__item w-[calc(24.9% - 0.75rem * 2)] mx-0 mt-[calc(0.75rem)] mb-12">
						<div className="footer-navigation__item-header">
							<div className="footer-navigation__item-header-heading">
								<a href={serverData.length ? serverData[10].url : "/about-us"} target="">
									{serverData.length ? serverData[10].name : "About Us"}
								</a>
							</div>
							<p aria-label={serverData.length ? serverData[10].listSubHeading.value.toLowerCase() : "about dux"}>
								<span aria-label={serverData.length ? serverData[10].listSubHeading.value : "About DUX"}>
									{serverData.length ? serverData[10].listSubHeading.value : "About DUX"}
								</span>
							</p>
						</div>
						<ul
							className="footer__sub-navigation"
							aria-label="the dux heritage contact us designers privacy policy cookies accessibility statement"
						>
							{aboutUsData.map((item, index) => (
								<FooterListItem
									key={index}
									href={item.url}
									defaultValue={aboutUsDefaultValues[index]}
									value={item.name}
								/>
							))}
							<li className="footer__sub-navigation-item" aria-label="login">
								<a href="/" target="" aria-label="login">
									Login
								</a>
							</li>
						</ul>
					</li>
					<li className="footer-navigation__item w-[calc(24.9% - 0.75rem * 2)] mx-0 mt-[calc(0.75rem)] mb-12"></li>
					<li className="footer-navigation__item w-[calc(24.9% - 0.75rem * 2)] mx-0 mt-[calc(0.75rem)] mb-12"></li>
					<li className="footer-navigation__item w-[calc(24.9% - 0.75rem * 2)] mx-0 mt-[calc(0.75rem)] mb-12"></li>
					<li className="footer-navigation__item w-[calc(24.9% - 0.75rem * 2)] mx-0 mt-[calc(0.75rem)] mb-12"></li>
					<li className="footer__follow">
						<ul className="footer__follow-list">
							<li>
								<a
									href={serverData.length ? serverData[0].instagramUrl.value : "https://www.instagram.com/duxiana/"}
									target="instagram"
									rel="noreferrer noopener"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										data-name="instagram"
										viewBox="0 0 11.184 11.184"
										className="svg-inline"
									>
										<path
											data-name="instagram_path"
											d="M5.592.994a17.147,17.147,0,0,1,2.237.062,2.882,2.882,0,0,1,1.056.186A2.182,2.182,0,0,1,9.942,2.3a2.882,2.882,0,0,1,.186,1.056c0,.559.062.746.062,2.237a17.146,17.146,0,0,1-.062,2.237,2.882,2.882,0,0,1-.186,1.056A2.182,2.182,0,0,1,8.885,9.942a2.882,2.882,0,0,1-1.056.186c-.559,0-.746.062-2.237.062a17.146,17.146,0,0,1-2.237-.062A2.882,2.882,0,0,1,2.3,9.942,2.182,2.182,0,0,1,1.243,8.885a2.882,2.882,0,0,1-.186-1.056c0-.559-.062-.746-.062-2.237a17.147,17.147,0,0,1,.062-2.237A2.882,2.882,0,0,1,1.243,2.3a2.232,2.232,0,0,1,.435-.621A1.051,1.051,0,0,1,2.3,1.243a2.882,2.882,0,0,1,1.056-.186A17.147,17.147,0,0,1,5.592.994m0-.994a18.359,18.359,0,0,0-2.3.062A3.836,3.836,0,0,0,1.926.311,2.432,2.432,0,0,0,.932.932a2.432,2.432,0,0,0-.621.994A2.831,2.831,0,0,0,.062,3.293,18.359,18.359,0,0,0,0,5.592a18.359,18.359,0,0,0,.062,2.3A3.836,3.836,0,0,0,.311,9.258a2.432,2.432,0,0,0,.621.994,2.432,2.432,0,0,0,.994.621,3.836,3.836,0,0,0,1.367.249,18.36,18.36,0,0,0,2.3.062,18.36,18.36,0,0,0,2.3-.062,3.836,3.836,0,0,0,1.367-.249,2.607,2.607,0,0,0,1.616-1.616,3.836,3.836,0,0,0,.249-1.367c0-.621.062-.808.062-2.3a18.36,18.36,0,0,0-.062-2.3,3.836,3.836,0,0,0-.249-1.367,2.432,2.432,0,0,0-.621-.994A2.432,2.432,0,0,0,9.258.311,3.836,3.836,0,0,0,7.891.062,18.359,18.359,0,0,0,5.592,0m0,2.734A2.812,2.812,0,0,0,2.734,5.592,2.858,2.858,0,1,0,5.592,2.734m0,4.722A1.831,1.831,0,0,1,3.728,5.592,1.831,1.831,0,0,1,5.592,3.728,1.831,1.831,0,0,1,7.456,5.592,1.831,1.831,0,0,1,5.592,7.456m2.982-5.53a.683.683,0,1,0,.683.683.69.69,0,0,0-.683-.683"
											fillRule="evenodd"
										></path>
									</svg>
									<span className="sr-only">Follow us on instagram</span>
								</a>
							</li>
							<li>
								<a
									href={serverData.length ? serverData[0].facebookUrl.value : "https://www.facebook.com/duxiana"}
									target="facebook"
									rel="noreferrer noopener"
								>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.011 10.824" className="svg-inline">
										<g data-name="facebook" transform="translate(-0.066)">
											<rect
												data-name="facebook_rect"
												width="7"
												height="5"
												transform="translate(0.066 2.338)"
												fill="none"
											></rect>
											<path
												data-name="facebook_path"
												d="M83.668,10.824V5.893h1.684l.241-1.924H83.668v-1.2c0-.541.18-.962.962-.962h1.022V.06c-.241,0-.842-.06-1.5-.06a2.321,2.321,0,0,0-2.465,2.526V3.969H80V5.893h1.684v4.931Z"
												transform="translate(-76.575)"
												fillRule="evenodd"
											></path>
										</g>
									</svg>
									<span className="sr-only">Follow us on facebook</span>
								</a>
							</li>
							<li>
								<a
									href={serverData.length ? serverData[0].twitterUrl.value : "https://twitter.com/duxbedsuk?lang=en"}
									target="twitter"
									rel="noreferrer noopener"
								>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 17.944" className="svg-inline">
										<path
											data-name="twitter_path"
											d="M23,3a10.9,10.9,0,0,1-3.14,1.53,4.48,4.48,0,0,0-7.86,3v1A10.66,10.66,0,0,1,3,4s-4,9,5,13a11.64,11.64,0,0,1-7,2c9,5,20,0,20-11.5a4.5,4.5,0,0,0-.08-.83A7.72,7.72,0,0,0,23,3Z"
											transform="translate(-1 -2.99)"
										></path>
									</svg>
									<span className="sr-only">Follow us on twitter</span>
								</a>
							</li>
							<li>
								<a
									href={serverData.length ? serverData[0].pinterestUrl.value : "https://www.pinterest.se/dux_official/"}
									target="pinterest"
									rel="noreferrer noopener"
								>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.225 11.225" className="svg-inline">
										<path
											d="M5.8.188A5.61,5.61,0,0,0,3.748,11.02a18.277,18.277,0,0,1,.683-4.151,9.226,9.226,0,0,0-.036-1.75c0-.933.484-1.129.768-1.129.4,0,.96.154.96.8a.959.959,0,0,1-.607.941,6.892,6.892,0,0,0-.094.719A.924.924,0,0,0,6.448,7.559c1.386,0,1.6-1.925,1.6-2.455a2.2,2.2,0,0,0-2.2-2.216,2.527,2.527,0,0,0-2.6,2.519,4.353,4.353,0,0,0,.1.8c.419.068.376.642.2.8-.2.18-1.223.394-1.223-1.855A3.379,3.379,0,0,1,5.908,1.911a3.2,3.2,0,0,1,3.33,3.219A3.19,3.19,0,0,1,6.45,8.51,1.66,1.66,0,0,1,5.138,7.8a14.144,14.144,0,0,1-1.371,3.224A5.611,5.611,0,1,0,5.8.188Z"
											transform="translate(-0.188 -0.188)"
										></path>
									</svg>
									<span className="sr-only">Follow us on pinterest</span>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</footer>
	);
});

Footer.propTypes = {
	props: PropTypes.any
};

export default Footer;
