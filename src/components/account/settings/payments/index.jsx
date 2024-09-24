import { PlusIcon } from "@heroicons/react/solid";
import PaymentItem from "./item";
function PaymentsSetting() {
	return (
		<>
			<div className="flex flex-row items-center justify-between border-b py-6 px-10">
				<p className="m-0 text-base font-medium text-gray-400">Credit / Debit Card</p>
				<div className="flex flex-row items-center justify-center gap-2 border px-10 py-2 text-sm font-bold text-black">
					<PlusIcon className="h-4 w-4" />
					<span>Add Credit Card</span>
				</div>
			</div>
			<div className="flex flex-col gap-4 py-6 px-10">
				<PaymentItem isDefault type="mastercard" />
				<PaymentItem type="visa" />
			</div>
		</>
	);
}

export default PaymentsSetting;
