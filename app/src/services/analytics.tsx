import { createClient } from "@segment/analytics-react-native";

const segmentClient = createClient({
	writeKey: "REDACTED",
	trackAppLifecycleEvents: true,
});

export const trackScreen = (screenName: string) => {
	segmentClient.screen(screenName);
};
