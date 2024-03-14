import { FlatList, Pressable } from "react-native";

import AeroPressIcon from "../../../../assets/icons/aeropress.svg";
import { useRecipes } from "../../../features/recipes";
import { Box } from "../../../ui/atoms/Box";
import { Text } from "../../../ui/atoms/Text";
import { useAppTheme } from "../../../ui/theme";
import { HomeScreenProps } from "../types";

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
	const { data } = useRecipes();
	const {
		spacing,
		colors: { textPrimary },
	} = useAppTheme();
	return (
		<FlatList
			contentContainerStyle={{
				gap: spacing.m,
				paddingHorizontal: spacing.s,
				paddingVertical: spacing.m,
			}}
			data={data}
			renderItem={({ item }) => (
				<Pressable
					onPress={() => navigation.navigate("Brew", { recipeId: item.id })}
				>
					<Box flexDirection="row" alignItems="center" gap="s">
						<AeroPressIcon height={52} width={52} fill={textPrimary} />
						<Box>
							<Text variant="emph">{item.name}</Text>
							<Text variant="light">by {item.author}</Text>
						</Box>
					</Box>
				</Pressable>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};
