/* eslint-disable import/no-named-as-default */
import { memo } from "react";
import toast from "react-hot-toast";

/**
 * @description Show notifications
 * @param {*} message
 * @param {string} type
 * @returns {void} Notification
 */
const notification = memo(function MemoizedNotification({ message, type }) {
	// Translations
	const notificationErrorText = "Notification error: Must not have a empty message and type.";

	return message?.length > 0 && type?.length > 0
		? (() => {
				switch (type) {
					case "success":
						toast.success(message);
						break;
					case "error":
						toast.error(message);
						break;
					default:
						toast(message);
						break;
				}
		  })()
		: toast.error(notificationErrorText);
});

export default notification;
