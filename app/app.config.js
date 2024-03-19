const IS_DEV = process.env.APP_VARIANT === "development";

export default {
	name: IS_DEV ? "Cofi (Dev)" : "Cofi",
	slug: "cofi-companion",
	version: "1.0.0",
	orientation: "portrait",
	icon: "./assets/icon.png",
	userInterfaceStyle: "light",
	splash: {
		image: "./assets/splash.png",
		resizeMode: "contain",
		backgroundColor: "#ffffff",
	},
	assetBundlePatterns: ["**/*"],
	ios: {
		supportsTablet: true,
		bundleIdentifier: IS_DEV
			? "com.lucasloisp.cofi.dev"
			: "com.lucasloisp.cofi",
	},
	android: {
		adaptiveIcon: {
			foregroundImage: "./assets/adaptive-icon.png",
			backgroundColor: "#ffffff",
		},
		package: IS_DEV ? "com.lucasloisp.cofi.dev" : "com.lucasloisp.cofi",
		permissions: ["android.permission.ACCESS_NETWORK_STATE"],
	},
	web: {
		favicon: "./assets/favicon.png",
	},
	plugins: ["expo-font"],
	extra: {
		eas: {
			projectId: "4a2869f7-ecb4-4c01-8f75-07419b512c79",
		},
	},
	owner: "lucasloisp",
};
