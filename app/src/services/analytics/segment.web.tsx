// eslint-disable-next-line no-restricted-imports
import { AnalyticsBrowser, Plugin } from "@segment/analytics-next";
import React, { useEffect } from "react";

import { ScreenCall, TrackCall } from "./types";

const analytics = AnalyticsBrowser.load({
	//@ts-ignore
	writeKey: process.env.EXPO_PUBLIC_SEGMENT_KEY!,
});

export const SegmentClientProvider = ({
	children,
}: React.PropsWithChildren) => {
	return <>{children}</>;
};

export const useScreenCall = (): ScreenCall => analytics.page.bind(analytics);
export const useTrackCall = (): TrackCall => analytics.track.bind(analytics);
export const usePlugin = (plugin: Plugin) => {
	useEffect(() => {
		analytics.register(plugin);

		return () => {
			analytics.deregister(plugin.name);
		};
	}, [plugin]);
};
