import { NavigationContainerRef } from "@react-navigation/native";
import {
	EventPlugin,
	PluginType,
	TrackEventType,
} from "@segment/analytics-react-native";

export class SegmentScreenContextPlugin extends EventPlugin {
	type = PluginType.enrichment;

	private navigationRef: NavigationContainerRef<any>;

	constructor(navigationRef: NavigationContainerRef<any>) {
		super();
		this.navigationRef = navigationRef;
	}

	track(event: TrackEventType) {
		const routeName = this.navigationRef.getCurrentRoute()?.name;
		if (routeName) {
			const context = {
				...(event.context ?? {}),
				navigation: { screen: routeName },
			};
			event.context = context;
		}
		return event;
	}
}
