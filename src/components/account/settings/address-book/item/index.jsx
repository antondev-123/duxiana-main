import { CheckIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import { classNames } from "../../../../../utils/classnames";
import { convertStringToTitleCase } from "../../../../../utils/convertValues";

/**
 * @description Render memoized address book item component
 * @param {Boolean} isDefault
 * @returns {React.Component} Address book item component
 */
const AddressItem = ({ isDefault }) => {
	// Translations
	const editText = "Edit";
	const deleteText = "Delete";

	return (
		<div
			className={classNames(
				"flex flex-row items-center justify-between p-6",
				isDefault ? "border-l-4 border-l-black bg-gray-100 " : "border"
			)}
		>
			<div className="flex flex-col gap-4">
				<div className="flex flex-row items-center gap-2">
					<LocationMarkerIcon className="h-6 w-6" />

					<span className="text-base font-bold text-black">Tom Daley</span>
				</div>
				<div className="flex flex-col">
					<p className="m-0 text-xs text-black">1111 1st Ave, 12E, New York, NY</p>
					<p className="m-0 text-xs text-gray-400">10010 United States</p>
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
				<button className="w-52 bg-black py-2 text-sm text-white">Choose</button>
			)}
		</div>
	);
};

AddressItem.propTypes = {
	isDefault: PropTypes.bool
};

export default AddressItem;
