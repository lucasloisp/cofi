import "./polyfills";
import {
	useFonts,
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
	Quicksand_700Bold,
	Quicksand_300Light,
} from "@expo-google-fonts/quicksand";
import { ThemeProvider } from "@shopify/restyle";
import React from "react";

import { AppNavigationContainer } from "./src/navigation";
import { AnalyticsProvider } from "./src/services/analytics";
import { QueryProvider } from "./src/services/queries";
import theme from "./src/ui/theme";

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
