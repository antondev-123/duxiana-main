import { yupResolver } from "@hookform/resolvers/yup";
import { Link, navigate } from "gatsby";
import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ACCOUNT_PAGE, REGISTER_PAGE } from "../../constants/page-links";
import { useLogin } from "../../hooks/useAuth";
import LoadingIcon from "../../images/icon-loading.inline.svg";
import QuestionIcon from "../../images/icon-question.inline.svg";
import { convertStringToTitleCase } from "../../utils/convertValues";
import notification from "../../utils/notification";
import AgreeSection from "../auth/agree";
import Divider from "../auth/divider";
import JumpSection from "../auth/jump";
import NeedHelpSection from "../auth/need-help";
import SocialSignSection from "../auth/social/sign";

/**
 * @description Render memoized login form component
 * @returns {React.Component} Memoized login form component
 */
const LoginForm = memo(function MemoizedLoginForm() {
	const [loading, setLoading] = useState(false);

	// Translations
	const pageDetailsText = "Enter your details to get sign in your account";
	const forgotPasswordText = "Forgot Password";
	const rememberText = "Remember";
	const newHereText = "New Here";
	const loginText = "Login";
	const registerForEasierAccountAccessText =
		"Register for easier account access, order tracking, and quicker checkout.";
	const registerText = "Register";

	// React hook form
	const schema = yup.object().shape({
		email: yup.string().label("Email").email().required(),
		password: yup.string().label("Password").required(),
		remember: yup.bool()
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmitHandler = async (data) => {
		const { email, password, remember } = data;

		try {
			setLoading(true);

			const res = await useLogin({ email, password });

			navigate(ACCOUNT_PAGE);

			if (res) {
				setLoading(false);
				navigate(ACCOUNT_PAGE);

			} else {
				// notification("Your email address or password is incorrect. Please try again", "error");
				notification("Your email address or password is incorrect. Please try again", "error");
			}
		} catch (err) {
			console.error(err);

			setLoading(false);
			notification("Your email address or password is incorrect. Please try again", "error");
		}
	};

	return (
		<form className="m-auto flex max-w-7xl gap-x-6 px-8 pt-10" onSubmit={handleSubmit(onSubmitHandler)}>
			<NeedHelpSection />

			<div className="flex flex-1 flex-col border px-12 py-10">
				<h1 className="text-xl font-bold normal-case">{convertStringToTitleCase(loginText)}</h1>
				<p className="mt-1 text-sm">{pageDetailsText}</p>

				<SocialSignSection className="mt-8 justify-between" />
				<Divider text="Or" />

				<div className="flex flex-col gap-4">
					<div>
						<input
							type="email"
							{...register("email")}
							className="h-12 w-full border border-gray-400 px-4 text-sm focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
							placeholder="*Email address"
						/>
						<span className="text-xs text-red-400">{errors.email?.message}</span>
					</div>
					<div>
						<input
							type="password"
							{...register("password")}
							className="h-12 w-full border border-gray-400 px-4 text-sm focus:border-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-600"
							placeholder="*Password"
						/>
						<span className="text-xs text-red-400">{errors.password?.message}</span>
					</div>
				</div>

				<Link to="#" className="mt-2 text-sm font-bold underline decoration-black">
					{convertStringToTitleCase(forgotPasswordText) + "?"}
				</Link>

				<div className="form-check mt-8 flex items-center">
					<input
						className="form-check-input float-left mr-2 h-6 w-6 cursor-pointer appearance-none border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-gray-600 checked:bg-gray-600 focus:shadow-none focus:ring-0 focus:ring-offset-0"
						type="checkbox"
						id="rememberLogin"
						{...register("remember")}
					/>
					<label className="form-check-label inline-flex items-center text-sm text-gray-600 " htmlFor="rememberLogin">
						{rememberText}
						<QuestionIcon title="Remember Me" className="ml-1 h-5 w-5" />
					</label>
				</div>
				<button type="submit" className="mt-3 inline-flex h-14 w-full items-center justify-center bg-black text-white">
					{loading && <LoadingIcon />} {convertStringToTitleCase(loginText)}
				</button>

				<AgreeSection />
			</div>

			<JumpSection
				title={convertStringToTitleCase(newHereText) + "?"}
				content={registerForEasierAccountAccessText}
				label={convertStringToTitleCase(registerText)}
				url={REGISTER_PAGE}
			/>
		</form>
	);
});

export default LoginForm;
