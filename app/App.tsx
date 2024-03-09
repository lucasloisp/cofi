import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";

import { Router } from "./src/app/navigation/Router";
import theme from "./src/ui/theme";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<Router />
			</NavigationContainer>
		</ThemeProvider>
	);
}
