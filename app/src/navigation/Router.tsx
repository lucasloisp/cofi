import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BrewScreen } from "./screens/BrewScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { AppStackParamList } from "./types";

const AppStack = createNativeStackNavigator<AppStackParamList>();

export const Router = () => {
	return (
		<AppStack.Navigator>
			<AppStack.Screen name="Home" component={HomeScreen} />
			<AppStack.Screen
				name="Brew"
				component={BrewScreen}
				options={{ headerShown: false }}
			/>
		</AppStack.Navigator>
	);
};
