import { NavigationContainer } from "@react-navigation/native";

import { Router } from "./src/app/navigation/Router";

export default function App() {
	return (
		<NavigationContainer>
			<Router />
		</NavigationContainer>
	);
}
