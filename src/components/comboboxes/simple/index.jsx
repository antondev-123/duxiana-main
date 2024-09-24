import { Combobox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { classNames } from "../../../utils/classnames";

/**
 * @description Render memoized combobox component
 * @param {*} selectedItem
 * @param {Array} items
 * @param {Function} onChangeValue
 * @param {String} label
 * @returns {React.Component} Memoized combobox component
 */
export default function SimpleComboBox({ selectedItem = null, items, onChangeValue, label }) {
	const [query, setQuery] = useState("");
	const [selected, setSelected] = useState(selectedItem);

	const filteredItems =
		query === ""
			? items
			: items.filter((item) => {
					return item.name.toLowerCase().includes(query.toLowerCase());
			  });

	return (
		<Combobox as="div" value={selected} onChange={setSelected}>
			<Combobox.Label className="block text-sm font-medium text-gray-400">{label}</Combobox.Label>
			<div className="relative mt-1">
				<Combobox.Input
					className="w-full border border-gray-400 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600 sm:text-sm"
					onChange={(event) => {
						setQuery(event.target.value);
						onChangeValue(event.target.value);
					}}
					displayValue={(item) => {
						return item == null ? "" : item.name;
					}}
				/>
				<Combobox.Button className="absolute inset-y-0 right-0 flex items-center  px-2 focus:outline-none">
					<SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
				</Combobox.Button>

				{filteredItems.length > 0 && (
					<Combobox.Options className="absolute z-10 m-0 mt-1 max-h-60 w-full overflow-auto  bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{filteredItems.map((item, index) => (
							<Combobox.Option
								key={index}
								value={item}
								className={({ active }) =>
									classNames(
										"relative m-0 cursor-default select-none py-2 pl-8 pr-4",
										active ? "bg-gray-400 text-white" : "text-gray-900"
									)
								}
							>
								{({ active, selected }) => (
									<>
										<span className={classNames("block truncate", selected && "font-semibold")}>{item.name}</span>

										{selected && (
											<span
												className={classNames(
													"absolute inset-y-0 left-0 flex items-center pl-1.5",
													active ? "text-white" : "text-blue-900"
												)}
											>
												<CheckIcon className="h-5 w-5" aria-hidden="true" />
											</span>
										)}
									</>
								)}
							</Combobox.Option>
						))}
					</Combobox.Options>
				)}
			</div>
		</Combobox>
	);
}
