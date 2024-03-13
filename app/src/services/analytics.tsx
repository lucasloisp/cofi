import { createClient } from "@segment/analytics-react-native";

const segmentClient = createClient({
	writeKey: process.env.EXPO_PUBLIC_SEGMENT_KEY!,
	trackAppLifecycleEvents: true,
});

export const trackScreen = (screenName: string) => {
	segmentClient.screen(screenName);
};
