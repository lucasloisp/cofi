import { HeaderBackButton } from "@react-navigation/elements";
import { useReducer } from "react";
import { ActivityIndicator, Linking, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { BrewTimer } from "../../features/brew";
import { RecipeSummary } from "../../features/brew/RecipeSummary";
import { useRecipe, RecipeStepList } from "../../features/recipes";
import { t } from "../../services/strings";
import { Box } from "../../ui/atoms/Box";
import { Button } from "../../ui/atoms/Button";
import { Text } from "../../ui/atoms/Text";
import { useAppTheme } from "../../ui/theme";
import { BrewScreenProps } from "../types";

export const BrewScreen = ({ route, navigation }: BrewScreenProps) => {
	const { colors } = useAppTheme();
	const { data: recipe, isError } = useRecipe(route.params.recipeId);
	const [stepDone, toggleStep] = useReducer(
		(prev: number, ix: number) => (ix <= prev ? ix - 1 : ix),
		-1,
	);
	const insets = useSafeAreaInsets();

	if (isError) {
		return <Text variant="body">{t("brewScreen.loadingError")}</Text>;
	}

	if (!recipe) {
		return (
			<Box height="100%" justifyContent="center">
				<ActivityIndicator size="large" />
			</Box>
		);
	}

	return (
		<ScrollView
			contentInset={{ bottom: insets.bottom }}
			contentContainerStyle={{ paddingTop: insets.top }}
		>
			<Box flexDirection="row" alignItems="flex-start">
				<HeaderBackButton
					labelVisible={false}
					tintColor={colors.textPrimary}
					onPress={() => navigation.goBack()}
				/>
				<Box flex={1}>
					<Text variant="header">
						{recipe.name}
						<Text variant="body">
							{" "}
							{t("brewScreen.recipeAuthoredBy", { author: recipe.author })}
						</Text>
					</Text>
				</Box>
			</Box>
			<Box padding="m" rowGap="m" height="100%">
				<Button
					onPress={() => Linking.openURL(recipe.source.url)}
					textAlign="left"
				>
					{t("brewScreen.linkToSource", { name: recipe.source.name })}
				</Button>
				<RecipeSummary recipe={recipe} />
				<BrewTimer />
				{recipe.steps ? (
					<RecipeStepList
						steps={recipe.steps}
						stepDone={stepDone}
						toggleStep={toggleStep}
					/>
				) : (
					<ActivityIndicator />
				)}
			</Box>
		</ScrollView>
	);
};
