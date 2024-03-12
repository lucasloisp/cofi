import { NavigationContainerRef } from "@react-navigation/native";
// eslint-disable-next-line no-restricted-imports
import type { Context, Plugin } from "@segment/analytics-next";

export class SegmentScreenContextPlugin implements Plugin {
	name = "Segment Screen Context Plugin";
	type = "enrichment" as const;
	version = "1.0.0";
	isLoaded() {
		return true;
	}
	load() {
		return Promise.resolve();
	}

	private navigationRef: NavigationContainerRef<any>;

	constructor(navigationRef: NavigationContainerRef<any>) {
		this.navigationRef = navigationRef;
	}

	track(ctx: Context) {
		const routeName = this.navigationRef.getCurrentRoute()?.name;
		if (routeName) {
			ctx.event.context = {
				...(ctx.event.context ?? {}),
				navigation: { screen: routeName },
			};
		}
		return ctx;
	}
}
