import { yupResolver } from "@hookform/resolvers/yup";
import { navigate } from "gatsby";
import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ACCOUNT_PAGE, LOGIN_PAGE } from "../../constants/page-links";
import { useRegister } from "../../hooks/useAuth";
import LoadingIcon from "../../images/icon-loading.inline.svg";
import { convertStringToTitleCase } from "../../utils/convertValues";
import notification from "../../utils/notification";
import AgreeSection from "../auth/agree";
import Divider from "../auth/divider";
import JumpSection from "../auth/jump";
import NeedHelpSection from "../auth/need-help";
import SocialSignSection from "../auth/social/sign";

/**
 * @description Render memoized register form component
 * @returns {React.Component} Memoized register form component
 */
const RegisterForm = memo(function MemoizedRegisterForm() {
	const [loading, setLoading] = useState(false);

	// Translations
	const pageDetailsText = "Enter your details to get sign up your account";
	const subscribeText = "Subscribe me to receive email updates. Duxiana does not share or sell personal information";
	const registration = "Registration";
	const bedOwnerText = "Are you a current DUX Bed Owner ?";
	const haveAccountText = "Have an account?";
	const loginToViewAccountInfoText =
		"Log in to view your account information, order history, and wishlists all in once place.";
	const loginText = "Log in";

	// React hook form
	const schema = yup.object().shape({
		email: yup.string().label("Email").email().required(),
		password: yup
			.string()
			.label("Password")
			.matches(
				/^(?=.*[a-zA-z])(?=.*[0-9])(?=.{7,})/,
				"Password must be at least 7 characters and contain both alphabetic and numeric characters."
			)
			.required(),
		confirm_password: yup.string().oneOf([yup.ref("password")], "Passwords do not match"),
		first_name: yup.string().label("First name").required(),
		last_name: yup.string().label("Last name").required(),
		address_line1: yup.string().label("Location").required(),
		zipcode: yup.string().label("Zip / Postcode").required()
	});

	// Form options
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmitHandler = async (data) => {
		const customer = {
			email: data.email,
			first_name: data.first_name,
			last_name: data.last_name,
			addresses: [
				{
					first_name: data.first_name,
					last_name: data.last_name,
					address1: data.address_line1,
					postal_code: data.zipcode
				}
			],
			authentication: { force_password_reset: false, new_password: data.password }
		};

		setLoading(true);

		await useRegister(customer)
			.then((res) => {
				if (res) {
					reset();
					setLoading(false);
					navigate(ACCOUNT_PAGE);
				} else {
					notification("Something went wrong. Please try again", "error");
				}
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
				notification("Something went wrong. Please try again", "error");
			});
	};

	return (
		<form className="m-auto flex max-w-7xl gap-x-6 px-8 pt-10" onSubmit={handleSubmit(onSubmitHandler)}>
			<NeedHelpSection />

			<div className="flex flex-1 flex-col border px-12 py-10">
				<h1 className="text-xl font-bold">{convertStringToTitleCase(registration)}</h1>
				<p className="mt-1 text-sm">{pageDetailsText}</p>

				<SocialSignSection />
				<Divider text="Or" />

				<div className="flex flex-col gap-4">
					<div className="grid grid-cols-2 gap-2">
						<div>
							<input
								type="text"
								{...register("first_name")}
								className="h-12 w-full  border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
								placeholder="*First name"
							/>
							<span className="text-xs text-red-400">{errors.first_name?.message}</span>
						</div>
						<div>
							<input
								type="text"
								{...register("last_name")}
								className="h-12 w-full  border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
								placeholder="*Last name"
							/>
							<span className="text-xs text-red-400">{errors.last_name?.message}</span>
						</div>
					</div>
					<div>
						<input
							type="email"
							{...register("email")}
							className="h-12 w-full  border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
							placeholder="*Email address"
						/>
						<span className="text-xs text-red-400">{errors.email?.message}</span>
					</div>
					<div className="grid grid-cols-2 gap-2">
						<div>
							<input
								type="password"
								{...register("password")}
								className="h-12 w-full  border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
								placeholder="Password"
							/>
							<span className="text-xs text-red-400">{errors.password?.message}</span>
						</div>
						<div>
							<input
								type="password"
								{...register("confirm_password")}
								className="h-12 w-full  border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
								placeholder="Confirm Password"
							/>
							<span className="text-xs text-red-400">{errors.confirm_password?.message}</span>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-2">
						<div>
							<input
								type="text"
								{...register("address_line1")}
								className="h-12 w-full  border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
								placeholder="Location"
							/>
							<span className="text-xs text-red-400">{errors.address_line1?.message}</span>
						</div>
						<div>
							<input
								type="text"
								{...register("zipcode")}
								className="h-12 w-full  border border-gray-400 px-4 text-sm  focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
								placeholder="Zipcode"
							/>
							<span className="text-xs text-red-400">{errors.zipcode?.message}</span>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<p className="m-0 text-sm text-gray-600">{bedOwnerText}</p>
						<div className="form-check form-check-inline flex items-center">
							<label className="form-check-label inline-block  text-sm text-gray-600" htmlFor="yesRadio">
								Yes
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
								No
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

				<button type="submit" className="mt-3 inline-flex h-14 w-full items-center justify-center bg-black text-white">
					{loading && <LoadingIcon />} {convertStringToTitleCase(registration)}
				</button>

				<AgreeSection />
			</div>

			<JumpSection
				title={convertStringToTitleCase(haveAccountText)}
				content={loginToViewAccountInfoText}
				label={convertStringToTitleCase(loginText)}
				url={LOGIN_PAGE}
			/>
		</form>
	);
});

export default RegisterForm;
