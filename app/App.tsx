import "./polyfills";
import {
	useFonts,
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
	Quicksand_700Bold,
	Quicksand_300Light,
} from "@expo-google-fonts/quicksand";
import {
	DefaultTheme as DefaultNavigationTheme,
	NavigationContainer,
	Theme as NavigationTheme,
	useNavigationContainerRef,
} from "@react-navigation/native";
import { ThemeProvider, useTheme } from "@shopify/restyle";
import React, { useMemo } from "react";

import { Router } from "./src/app/navigation/Router";
import {
	AnalyticsProvider,
	useTrackNavigation,
} from "./src/services/analytics";
import { QueryProvider } from "./src/services/queries";
import theme, { Theme } from "./src/ui/theme";

const AppNavigationContainer = () => {
	const appTheme = useTheme<Theme>();
	const navigationTheme: NavigationTheme = useMemo(
		() => ({
			...DefaultNavigationTheme,
			colors: {
				...DefaultNavigationTheme.colors,
				background: appTheme.colors.mainBackground,
				primary: appTheme.colors.accent,
				border: appTheme.colors.accentDark,
				card: appTheme.colors.cardPrimaryBackground,
				text: appTheme.colors.textSecondary,
			},
		}),
		[appTheme],
	);
	const navigationRef = useNavigationContainerRef();
	const { onStateChange } = useTrackNavigation(navigationRef);
	return (
		<NavigationContainer
			ref={navigationRef}
			theme={navigationTheme}
			onStateChange={onStateChange}
		>
			<Router />
		</NavigationContainer>
	);
};

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		Quicksand_300Light,
		Quicksand_400Regular,
		Quicksand_500Medium,
		Quicksand_600SemiBold,
		Quicksand_700Bold,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<QueryProvider>
			<AnalyticsProvider>
				<ThemeProvider theme={theme}>
					<AppNavigationContainer />
				</ThemeProvider>
			</AnalyticsProvider>
		</QueryProvider>
	);
}
