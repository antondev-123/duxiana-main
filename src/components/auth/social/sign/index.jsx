import { memo } from "react";
import FacebookIcon from "../../../../images/icon-facebook.inline.svg";
import GoogleIcon from "../../../../images/icon-google.inline.svg";
import { classNames } from "../../../../utils/classnames";
import SocialButton from "../button";

/**
 * @description Render memoized social sign in component
 * @returns {React.Component} Memoized social sign in component
 */
const SocialSignSection = memo(function MemoizedSocialSignSection({ className }) {
	return (
		<div className={classNames("flex flex-row gap-4", className)}>
			<SocialButton title="Facebook" icon={FacebookIcon} url="#" />
			<SocialButton title="Google" icon={GoogleIcon} url="#" />
		</div>
	);
});

export default SocialSignSection;
