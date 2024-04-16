import { FlatList, Pressable } from "react-native";

import { useRecipes } from "../../features/recipes";
import { MethodIcon } from "../../features/recipes/MethodIcon";
import { t } from "../../services/strings";
import { Box } from "../../ui/atoms/Box";
import { Text } from "../../ui/atoms/Text";
import { useAppTheme } from "../../ui/theme";
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
						<MethodIcon
							method={item.method}
							height={52}
							width={52}
							fill={textPrimary}
						/>
						<Box>
							<Text variant="action">{item.name}</Text>
							<Text variant="body">
								{t("recipesScreen.recipeAuthoredBy", { author: item.author })}
							</Text>
						</Box>
					</Box>
				</Pressable>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};
