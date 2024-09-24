import LiveChatIcon from "../../../images/icon-live-chat.inline.svg";
import EmailIcon from "../../../images/icon-mail.inline.svg";
import MessageIcon from "../../../images/icon-message.inline.svg";
import PhoneIcon from "../../../images/icon-phone.inline.svg";
import NeedHelpItem from "./item";

/**
 * @description Render memoized need help section component
 * @returns {React.Component} Memoized need help section component
 */
const NeedHelpSection = () => {
	// Translations
	const needHelpText = "Need help";
	const contactUsText = "If you have questions or need asisstance, please contact us";

	const needHelpItemLinks = [
		{
			title: "Call",
			icon: PhoneIcon,
			url: "#"
		},
		{
			title: "Live Chat",
			icon: LiveChatIcon,
			url: "#"
		},
		{
			title: "Email Us",
			icon: EmailIcon,
			url: "#"
		},
		{
			title: "Text Us",
			icon: MessageIcon,
			url: "#"
		}
	];

	return (
		<div className="need-help flex w-52 flex-col">
			<h2 className="text-lg font-bold normal-case">{needHelpText}?</h2>
			<p className="mt-2 text-sm text-gray-700">{contactUsText}:</p>
			<div className="mt-10 grid grid-cols-1 gap-5">
				{needHelpItemLinks.map((item, index) => (
					<NeedHelpItem key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default NeedHelpSection;
