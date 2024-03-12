// eslint-disable-next-line no-restricted-imports
import {
	createClient,
	AnalyticsProvider,
	useAnalytics,
	Plugin,
} from "@segment/analytics-react-native";
import { useEffect } from "react";

import { ScreenCall, TrackCall } from "./types";

const segmentClient = createClient({
	//@ts-ignore
	writeKey: process.env.EXPO_PUBLIC_SEGMENT_KEY!,
	trackAppLifecycleEvents: true,
});

export const SegmentClientProvider = ({
	children,
}: React.PropsWithChildren) => {
	return (
		<AnalyticsProvider client={segmentClient}>{children}</AnalyticsProvider>
	);
};

export const useScreenCall = (): ScreenCall => useAnalytics().screen;
export const useTrackCall = (): TrackCall => useAnalytics().track;
export const usePlugin = (plugin: Plugin) => {
	const client = useAnalytics();
	useEffect(() => {
		segmentClient.add({ plugin });

		return () => segmentClient.remove({ plugin });
	}, [client, plugin]);
};
