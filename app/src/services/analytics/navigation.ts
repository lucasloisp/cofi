import { NavigationContainerRef } from "@react-navigation/native";
import { useCallback, useMemo } from "react";

import { SegmentScreenContextPlugin } from "./SegmentScreenContextPlugin";
import { usePlugin, useScreenCall } from "./segment";

export const useTrackNavigation = (
	navigationRef: NavigationContainerRef<any>,
) => {
	const screenCall = useScreenCall();

	usePlugin(
		useMemo(
			() => new SegmentScreenContextPlugin(navigationRef),
			[navigationRef],
		),
	);

	const onStateChange = useCallback(() => {
		const route = navigationRef.getCurrentRoute();
		route && screenCall(route.name);
	}, [screenCall, navigationRef]);

	return { onStateChange };
};
