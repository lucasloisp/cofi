import { FlatList, Pressable } from "react-native";

import { useRecipes } from "../../../features/recipes";
import { Box } from "../../../ui/atoms/Box";
import { Text } from "../../../ui/atoms/Text";
import { HomeScreenProps } from "../types";

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
	const { data } = useRecipes();
	return (
		<FlatList
			contentContainerStyle={{ gap: 16 }}
			renderItem={({ item }) => (
				<Pressable
					onPress={() => navigation.navigate("Brew", { recipeId: item.id })}
				>
					<Box
						borderColor="accentDark"
						borderRadius={4}
						borderWidth={2}
						padding="s"
					>
						<Text>{item.name}</Text>
					</Box>
				</Pressable>
			)}
			data={data}
			keyExtractor={(item) => item.id}
		/>
	);
};
