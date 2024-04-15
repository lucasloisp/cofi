import { useReducer, useState } from "react";
import {
	ActivityIndicator,
	Alert,
	Linking,
	Pressable,
	ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import CoffeeBeansIcon from "../../../assets/icons/coffee-beans.svg";
import CoffeeScoopIcon from "../../../assets/icons/coffee-scoop.svg";
import {
	BrewSizeAdjustment,
	BrewTimer,
	CUP_SIZE_ML,
} from "../../features/brew";
import {
	useRecipe,
	RecipeStepList,
	useGrindSettings,
} from "../../features/recipes";
import { MethodIcon } from "../../features/recipes/MethodIcon";
import { t } from "../../services/strings";
import { Box } from "../../ui/atoms/Box";
import { Button } from "../../ui/atoms/Button";
import { Text } from "../../ui/atoms/Text";
import { CalloutCell } from "../../ui/molecules/CalloutCell";
import { BrewScreenProps } from "../types";

export const BrewScreen = ({ route }: BrewScreenProps) => {
	const { data: recipe, isError } = useRecipe(route.params.recipeId);
	const [drinkSize, setDrinkSize] = useState(CUP_SIZE_ML);
	const [stepDone, toggleStep] = useReducer(
		(prev: number, ix: number) => (ix <= prev ? ix - 1 : ix),
		-1,
	);
	const insets = useSafeAreaInsets();
	const { data: grindSetting } = useGrindSettings(recipe?.coffeeGrind);
	const onPressCoffeeGrind =
		grindSetting &&
		recipe?.coffeeGrind &&
		(() => {
			Alert.alert(
				t("brewScreen.grinderSettings.title"),
				t("brewScreen.grinderSettings.message", {
					grind: recipe.coffeeGrind,
					setting: grindSetting,
				}),
			);
		});

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

	const recipeIsScalable = recipe.coffeeRatio !== undefined;
	const coffeeWeight = recipe.coffeeRatio
		? recipe.coffeeRatio * drinkSize
		: recipe.coffeeWeight;

	return (
		<ScrollView contentInset={{ bottom: insets.bottom }}>
			<Box paddingHorizontal="m" paddingBottom="m" rowGap="m" height="100%">
				<Text variant="header">
					{recipe.name}
					<Text variant="body">
						{" "}
						{t("brewScreen.recipeAuthoredBy", { author: recipe.author })}
					</Text>
				</Text>
				<Button
					onPress={() => Linking.openURL(recipe.source.url)}
					textAlign="left"
				>
					{t("brewScreen.linkToSource", { name: recipe.source.name })}
				</Button>
				<Box flexDirection="row" columnGap="s" paddingVertical="s">
					<CalloutCell
						Icon={(props) => <MethodIcon method={recipe.method} {...props} />}
						label={recipe.method}
					/>
					<CalloutCell
						Icon={CoffeeBeansIcon}
						label={`${coffeeWeight?.toFixed(0) ?? "- "}g`}
					/>
					<Pressable onPress={onPressCoffeeGrind}>
						<CalloutCell
							Icon={CoffeeScoopIcon}
							label={t(`grindSize.${recipe.coffeeGrind}`, {
								defaultValue: "-",
							})}
						/>
					</Pressable>
				</Box>
				{recipeIsScalable && (
					<BrewSizeAdjustment size={drinkSize} setSize={setDrinkSize} />
				)}
				<BrewTimer />
				<Text variant="subheader">{t("brewScreen.stepsSection")}</Text>
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
