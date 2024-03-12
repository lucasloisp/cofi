import { useReducer, useState } from "react";
import {
	ActivityIndicator,
	Button,
	Linking,
	Pressable,
	TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AeroPressIcon from "../../../../assets/icons/aeropress.svg";
import CoffeeBeansIcon from "../../../../assets/icons/coffee-beans.svg";
import CoffeeScoopIcon from "../../../../assets/icons/coffee-scoop.svg";
import {
	RecipeCharacteristic,
	useRecipe,
	RecipeStepList,
} from "../../../features/recipes";
import { Box } from "../../../ui/atoms/Box";
import { Text } from "../../../ui/atoms/Text";
import { BrewScreenProps } from "../types";

export const BrewScreen = ({ route }: BrewScreenProps) => {
	const insets = useSafeAreaInsets();
	const { data: recipe, isError } = useRecipe(route.params.recipeId);
	const [drinkSize, setDrinkSize] = useState(120);
	const [stepDone, toggleStep] = useReducer(
		(prev: number, ix: number) => (ix <= prev ? ix - 1 : ix),
		-1,
	);

	if (isError) {
		return (
			<Text variant="body" textAlign="center">
				There was an error loading the recipe.
			</Text>
		);
	}
	if (!recipe) {
		return <ActivityIndicator size="large" />;
	}
	const recipeIsScalable = recipe.coffeeRatio !== undefined;
	const coffeeWeight = recipe.coffeeRatio
		? recipe.coffeeRatio * drinkSize
		: recipe.coffeeWeight;
	return (
		<Box
			paddingHorizontal="m"
			rowGap="m"
			height="100%"
			style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
		>
			<Text variant="header">
				{recipe.name}
				<Text fontFamily="Quicksand_400Regular"> by {recipe.author}</Text>
			</Text>
			<Pressable onPress={() => Linking.openURL(recipe.source)}>
				<Box backgroundColor="accentLight" padding="m" borderRadius={4}>
					<Text variant="action">Source: AeroPrecipe.</Text>
				</Box>
			</Pressable>
			{recipeIsScalable && (
				<>
					<Box flexDirection="row" alignItems="center" columnGap="s">
						<Pressable
							onPress={() => setDrinkSize(drinkSize - 60)}
							style={{ flex: 1 }}
						>
							<Box backgroundColor="accentLight" padding="s">
								<Text textAlign="center">Less</Text>
							</Box>
						</Pressable>
						<Text>{drinkSize} ml</Text>
						<Pressable
							onPress={() => setDrinkSize(drinkSize + 60)}
							style={{ flex: 1 }}
						>
							<Box backgroundColor="accentLight" padding="s">
								<Text textAlign="center">More</Text>
							</Box>
						</Pressable>
					</Box>
				</>
			)}
			<Box flexDirection="row" columnGap="s" paddingVertical="s">
				<RecipeCharacteristic Icon={AeroPressIcon} label={recipe.method} />
				<RecipeCharacteristic
					Icon={CoffeeBeansIcon}
					label={`${coffeeWeight?.toFixed(0) ?? "- "}g`}
				/>
				<RecipeCharacteristic
					Icon={CoffeeScoopIcon}
					label={recipe.coffeeGrind ?? "-"}
				/>
			</Box>
			<Text variant="subheader">Steps</Text>
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
	);
};
