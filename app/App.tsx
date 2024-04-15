import "./polyfills";
import { ThemeProvider } from "@shopify/restyle";
import React from "react";

import { AppNavigationContainer } from "./src/navigation";
import { QueryProvider } from "./src/services/queries";
import { useLoadFonts } from "./src/ui/fonts";
import theme from "./src/ui/theme";

export default function App() {
	const [fontsLoaded, fontError] = useLoadFonts();

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<QueryProvider>
			<ThemeProvider theme={theme}>
				<AppNavigationContainer />
			</ThemeProvider>
		</QueryProvider>
	);
}
