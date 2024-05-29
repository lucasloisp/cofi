import { HeaderBackButton } from "@react-navigation/elements";
import { useReducer, useState } from "react";
import { ActivityIndicator, Linking, ScrollView } from "react-native";
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
import { CoffeeGrind, CoffeeMethod } from "../../services/api";
import { t } from "../../services/strings";
import { Box } from "../../ui/atoms/Box";
import { Button } from "../../ui/atoms/Button";
import { Text } from "../../ui/atoms/Text";
import { CalloutCell } from "../../ui/molecules/CalloutCell";
import { useAppTheme } from "../../ui/theme";
import { BrewScreenProps } from "../types";

type RecipeSummaryProps = {
	method: CoffeeMethod;
	coffeeWeight: number | undefined;
	coffeeGrind: CoffeeGrind | undefined;
};
const RecipeSummary = ({
	method,
	coffeeWeight,
	coffeeGrind,
}: RecipeSummaryProps) => {
	const { data: grindSetting } = useGrindSettings(coffeeGrind);
	return (
		<Box flexDirection="row" columnGap="s" paddingVertical="s">
			<CalloutCell
				Icon={(props) => <MethodIcon method={method} {...props} />}
			/>
			<CalloutCell
				Icon={CoffeeBeansIcon}
				label={`${coffeeWeight?.toFixed(0) ?? "- "}g`}
			/>
			<CalloutCell
				Icon={CoffeeScoopIcon}
				label={t(`grindSize.${coffeeGrind}`, {
					defaultValue: "-",
				})}
				secondaryLabel={`${grindSetting ?? "-"} clicks`}
			/>
		</Box>
	);
};

export const BrewScreen = ({ route, navigation }: BrewScreenProps) => {
	const { colors } = useAppTheme();
	const { data: recipe, isError } = useRecipe(route.params.recipeId);
	const [drinkSize, setDrinkSize] = useState(CUP_SIZE_ML);
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

	const recipeIsScalable = recipe.coffeeRatio !== undefined;
	const coffeeWeight =
		recipe.coffeeRatio !== undefined
			? recipe.coffeeRatio * drinkSize
			: recipe.coffeeWeight;

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
				<RecipeSummary
					method={recipe.method}
					coffeeWeight={coffeeWeight}
					coffeeGrind={recipe.coffeeGrind}
				/>
				{recipeIsScalable && (
					<BrewSizeAdjustment size={drinkSize} setSize={setDrinkSize} />
				)}
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
