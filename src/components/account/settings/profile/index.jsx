import { memo, useState } from "react";
import SocialSignSection from "../../../../components/auth/social/sign";
import LoadingIcon from "../../../../images/icon-loading.inline.svg";
import { convertStringToTitleCase } from "../../../../utils/convertValues";
import AgreeSection from "../../../auth/agree";

/**
 * @description Render memoized profile settings component
 * @returns {React.Component} Memoized profile settings component
 */
const ProfileSettings = memo(function MemoizedProfileSettings() {
	const [loading, setLoading] = useState(false);

	// Translations
	const bedOwnerText = "Are you a current DUX Bed Owner ?";
	const subscribeText = "Subscribe me to receive email updates. Duxiana does not share or sell personal information";
	const registerText = "Update Profile";
	const rememberLoginText = "Allow saved account back for auto login";
	const connectYourAccountText = "Connect your account";
	const updateYourProfileText = "Update your profile";
	const yesText = "Yes";
	const noText = "No";

	return (
		<>
			<div className="flex flex-col border-b p-6">
				<p className="m-0 text-base font-medium text-gray-400">{convertStringToTitleCase(connectYourAccountText)}</p>
				<SocialSignSection className="mt-3" />
			</div>
			<div className="flex max-w-5xl flex-col p-6">
				<p className="m-0 text-base font-medium text-gray-400">{convertStringToTitleCase(updateYourProfileText)}</p>
				<div className="flex flex-col gap-4">
					<div className="grid grid-cols-2 gap-2">
						<div>
							<input
								type="text"
								className="h-12 w-full border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
								placeholder="*First name"
							/>
						</div>
						<div>
							<input
								type="text"
								className="h-12 w-full border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
								placeholder="*Last name"
							/>
						</div>
					</div>
					<div>
						<input
							type="email"
							className="h-12 w-full border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
							placeholder="*Email address"
						/>
					</div>
					<div className="grid grid-cols-2 gap-2">
						<div>
							<input
								type="password"
								className="h-12 w-full border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
								placeholder="Password"
							/>
						</div>
						<div>
							<input
								type="password"
								className="h-12 w-full border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
								placeholder="Confirm Password"
							/>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-2">
						<div>
							<input
								type="text"
								className="h-12 w-full border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
								placeholder="Location"
							/>
						</div>
						<div>
							<input
								type="text"
								className="h-12 w-full border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
								placeholder="Zipcode"
							/>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<p className="m-0 text-sm text-gray-600">{bedOwnerText}</p>
						<div className="form-check form-check-inline flex items-center">
							<label className="form-check-label inline-block  text-sm text-gray-600" htmlFor="yesRadio">
								{convertStringToTitleCase(yesText)}
							</label>
							<input
								className="form-check-input form-check-input float-left  ml-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-gray-600 checked:bg-gray-600 focus:outline-none focus:ring-0 focus:ring-offset-0"
								type="radio"
								name="inlineRadioOptions"
								id="yesRadio"
								value={true}
							/>
						</div>
						<div className="form-check form-check-inline flex items-center">
							<label className="form-check-label inline-block  text-sm text-gray-600" htmlFor="noRadio">
								{convertStringToTitleCase(noText)}
							</label>
							<input
								className="form-check-input form-check-input float-left ml-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-gray-600 checked:bg-gray-600 focus:outline-none focus:ring-0 focus:ring-offset-0"
								type="radio"
								name="inlineRadioOptions"
								id="noRadio"
								value={false}
							/>
						</div>
					</div>
				</div>

				<div className="form-check mt-8 flex items-center">
					<input
						className="form-check-input float-left mr-2 h-6 w-6 cursor-pointer appearance-none border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-gray-600 checked:bg-gray-600 focus:shadow-none focus:ring-0 focus:ring-offset-0"
						type="checkbox"
						id="subscribeMe"
					/>
					<label className="form-check-label inline-flex items-center text-sm text-gray-600" htmlFor="subscribeMe">
						{subscribeText}
					</label>
				</div>
				<div className="form-check mt-4 flex items-center">
					<input
						className="form-check-input float-left mr-2 h-6 w-6 cursor-pointer appearance-none border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-gray-600 checked:bg-gray-600 focus:shadow-none focus:ring-0 focus:ring-offset-0"
						type="checkbox"
						id="rememberLogin"
					/>
					<label className="form-check-label inline-flex items-center text-sm text-gray-600" htmlFor="rememberLogin">
						{rememberLoginText}
					</label>
				</div>

				<button type="submit" className="mt-3 inline-flex h-14 w-full items-center justify-center bg-black text-white">
					{loading && <LoadingIcon />} {registerText}
				</button>

				<AgreeSection />
			</div>
		</>
	);
});

export default ProfileSettings;
