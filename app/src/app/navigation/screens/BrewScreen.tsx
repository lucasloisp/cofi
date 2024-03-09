import { Linking, Pressable } from "react-native";
import { Box } from "../../../ui/atoms/Box";
import { Text } from "../../../ui/atoms/Text";

export const BrewScreen = () => {
	return (
		<Box paddingHorizontal="m">
			<Text variant="header">
				Smooothy <Text fontFamily="Quicksand_400Regular">by Adib</Text>
			</Text>
			<Pressable
				onPress={() =>
					Linking.openURL("https://aeroprecipe.com/recipes/smooothy")
				}
			>
				<Box backgroundColor="accentLight" padding="m" borderRadius={4}>
					<Text variant="action">Source: AeroPrecipe.</Text>
				</Box>
			</Pressable>
			<Text variant="body">Method: AeroPress</Text>
			<Text variant="body">Filters: two, rinsed</Text>
			<Text variant="body">Coffee: 14g</Text>
			<Text variant="body">Grind: Medium-fine (10 clicks on C3)</Text>
			<Text variant="body">
				Bloom the coffee with 40g of water for 30 seconds
			</Text>
			<Text variant="body">Add 180g water and place the plunger</Text>
			<Text variant="body">At 1:30 swirl</Text>
			<Text variant="body">At 1:50 press for 20 seconds</Text>
		</Box>
	);
};
