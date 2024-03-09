import {
	useFonts,
	Quicksand_400Regular,
	Quicksand_600SemiBold,
	Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";

import { Router } from "./src/app/navigation/Router";
import theme from "./src/ui/theme";

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		Quicksand_400Regular,
		Quicksand_600SemiBold,
		Quicksand_700Bold,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<Router />
			</NavigationContainer>
		</ThemeProvider>
	);
}
