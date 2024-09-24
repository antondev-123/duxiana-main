import { createContext, useContext } from "react";

const AppContext = createContext();

/**
 * @description Create a new context for the application
 * @param {*} props
 * @returns {React.Element} The context provider
 */
export const AppProvider = (props) => {
	return <AppContext.Provider value={{}} {...props} />;
};

export const useAppContext = () => useContext(AppContext);
