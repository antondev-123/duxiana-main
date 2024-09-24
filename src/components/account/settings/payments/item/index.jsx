import { CheckIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import { memo } from "react";
import MasterCardIcon from "../../../../../images/icon-mastercard.inline.svg";
import VisaIcon from "../../../../../images/icon-visa.inline.svg";
import { classNames } from "../../../../../utils/classnames";
import { convertStringToLowercase, convertStringToTitleCase } from "../../../../../utils/convertValues";

/**
 * @description Render memoized payment item component
 * @param {Boolean} isDefault
 * @param {String} type
 * @returns {React.Component} Memoized payment item component
 */
const PaymentItem = memo(function MemoizedPaymentItem({ isDefault, type }) {
	// Translations
	const masterCartText = "Master Card";
	const visaText = "Visa";
	const validUntilText = "Valid until";
	const editText = "Edit";
	const deleteText = "Delete";
	const chooseText = "Choose";

	// Strings
	const convertedType = convertStringToLowercase(type);

	// Variables
	let Icon = null;
	let CardText = null;

	// Check `convertedType` and set `Icon` and `CardText`
	switch (convertedType) {
		case "mastercard":
			Icon = MasterCardIcon;
			CardText = masterCartText;
			break;
		case "visa":
			Icon = VisaIcon;
			CardText = visaText;
			break;
		default:
			break;
	}

	return (
		<div
			className={classNames(
				"flex flex-row items-center justify-between p-6",
				isDefault ? "border-l-4 border-l-black bg-gray-100 " : "border"
			)}
		>
			<div className="flex flex-col gap-4">
				<div className="flex flex-row items-center gap-4">
					<Icon className="h-10 w-10" title={convertStringToTitleCase(CardText)} />
					<div className="flex flex-col">
						<p className="m-0 text-sm text-gray-400">**** **** **** 2902</p>
						<span className="text-base font-bold text-black">{convertStringToTitleCase(CardText)}</span>
					</div>
				</div>
				<div className="flex flex-col">
					<p className="m-0 text-xs text-gray-400">{convertStringToTitleCase(validUntilText)} : Sep 2022</p>
				</div>
				<div className="flex flex-row gap-6">
					<button className="border-b border-b-black text-sm text-black"> {convertStringToTitleCase(editText)} </button>
					<button className="border-b border-b-black text-sm text-black">
						{" "}
						{convertStringToTitleCase(deleteText)}{" "}
					</button>
				</div>
			</div>
			{isDefault ? (
				<CheckIcon className="h-8 w-8" />
			) : (
				<button type="button" className="w-52 bg-black py-2 text-sm text-white">
					{convertStringToTitleCase(chooseText)}
				</button>
			)}
		</div>
	);
});

PaymentItem.propTypes = {
	isDefault: PropTypes.bool,
	type: PropTypes.string
};

export default PaymentItem;
