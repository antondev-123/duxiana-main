import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Toaster } from "react-hot-toast";
import Layout from "./src/components/layouts";
import { AppProvider } from "./src/contexts/AppProvider";
import "./src/styles/main.scss";

// Font Awesome
library.add(fab);
library.add(fas);
library.add(far);

/**
 * @description Wrap the root element with some context providers
 * @param {*} element
 * @returns {React.Element} The root element with the context providers
 */
export const wrapRootElement = ({ element }) => <AppProvider>{element}</AppProvider>;

/**
 * @description Wrap the page element with the layout component
 * @param {*} element
 * @param {*} props
 * @returns {React.Element} The page element wrapped with the layout component
 */
export const wrapPageElement = ({ element, props }) => (
	<Layout {...props}>
		<Toaster
			position="bottom-right"
			containerStyle={{
				bottom: 30,
				right: 30
			}}
			toastOptions={{
				style: {
					fontSize: 15
				}
			}}
		/>
		{element}
	</Layout>
);
