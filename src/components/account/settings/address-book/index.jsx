import { PlusIcon } from "@heroicons/react/solid";
import AddressItem from "./item";
function AddressBook() {
	return (
		<>
			<div className="flex flex-row items-center justify-between border-b py-6 px-10">
				<p className="m-0 text-base font-medium text-gray-400">Address List</p>
				<div className="flex flex-row items-center justify-center gap-2 border px-10 py-2 text-sm font-bold text-black">
					<PlusIcon className="h-4 w-4" />
					<span>Add Address</span>
				</div>
			</div>
			<div className="flex flex-col gap-4 py-6 px-10">
				<AddressItem isDefault />
				<AddressItem />
			</div>
		</>
	);
}

export default AddressBook;
