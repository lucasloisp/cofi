import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";

import { BrewScreen } from "./screens/BrewScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { AppStackParamList, HomeScreenProps } from "./types";
import { t } from "../services/strings";

const AppStack = createNativeStackNavigator<AppStackParamList>();

export const Router = () => {
	return (
		<AppStack.Navigator>
			<AppStack.Screen
				name="Home"
				component={HomeScreen}
				options={({ navigation }: HomeScreenProps) => ({
					title: t("recipesScreen.title"),
					headerRight: ({ tintColor }) => (
						<Button
							title="Settings"
							color={tintColor}
							onPress={() => navigation.navigate("Settings")}
						/>
					),
				})}
			/>
			<AppStack.Screen
				name="Brew"
				component={BrewScreen}
				options={{ headerShown: false }}
			/>
			<AppStack.Screen
				name="Settings"
				component={SettingsScreen}
				options={{ title: t("settingsScreen.title") }}
			/>
		</AppStack.Navigator>
	);
};
