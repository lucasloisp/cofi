import { NavigationContainerRef } from "@react-navigation/native";
import { useCallback } from "react";

import { useScreenCall } from "./segment";

export const useTrackNavigation = (
	navigationRef: NavigationContainerRef<any>,
) => {
	const screenCall = useScreenCall();

	const onStateChange = useCallback(() => {
		const route = navigationRef.getCurrentRoute();
		route && screenCall(route.name);
	}, [screenCall, navigationRef]);

	return { onStateChange };
};
