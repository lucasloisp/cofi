import { Button, Text, View } from "react-native";

import { HomeScreenProps } from "../types";

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
	return (
		<View>
			<Text>Home Screen</Text>
			<Button title="Go to Brew" onPress={() => navigation.navigate("Brew")} />
		</View>
	);
};
