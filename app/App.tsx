import {
	useFonts,
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
	Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import {
	DefaultTheme as DefaultNavigationTheme,
	NavigationContainer,
	Theme as NavigationTheme,
} from "@react-navigation/native";
import { ThemeProvider, useTheme } from "@shopify/restyle";
import { useMemo } from "react";

import { Router } from "./src/app/navigation/Router";
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
	return (
		<NavigationContainer theme={navigationTheme}>
			<Router />
		</NavigationContainer>
	);
};

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
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
			<ThemeProvider theme={theme}>
				<AppNavigationContainer />
			</ThemeProvider>
		</QueryProvider>
	);
}
