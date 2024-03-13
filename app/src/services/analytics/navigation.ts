import { NavigationContainerRef } from "@react-navigation/native";
import { useScreenCall } from "./segment";
import { useCallback } from "react";

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
