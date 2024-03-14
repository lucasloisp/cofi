import {
	createClient,
	AnalyticsProvider,
	useAnalytics,
} from "@segment/analytics-react-native";

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
