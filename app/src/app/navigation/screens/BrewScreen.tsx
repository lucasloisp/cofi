import { useReducer } from "react";
import { ActivityIndicator, Linking, Pressable } from "react-native";

import AeroPressIcon from "../../../../assets/icons/aeropress.svg";
import CoffeeBeansIcon from "../../../../assets/icons/coffee-beans.svg";
import CoffeeScoopIcon from "../../../../assets/icons/coffee-scoop.svg";
import {
	RecipeStepTask,
	RecipeCharacteristic,
	useRecipe,
} from "../../../features/recipes";
import { Box } from "../../../ui/atoms/Box";
import { Text } from "../../../ui/atoms/Text";

export const BrewScreen = () => {
	const { data: recipe, isError } = useRecipe(1);
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
	const steps = recipe.steps.map((step, ix) => ({
		...step,
		done: ix <= stepDone,
	}));
	return (
		<Box paddingHorizontal="m" rowGap="m">
			<Text variant="header">
				{recipe.name}{" "}
				<Text fontFamily="Quicksand_400Regular">by {recipe.author}</Text>
			</Text>
			<Pressable onPress={() => Linking.openURL(recipe.source)}>
				<Box backgroundColor="accentLight" padding="m" borderRadius={4}>
					<Text variant="action">Source: AeroPrecipe.</Text>
				</Box>
			</Pressable>
			<Box flexDirection="row" columnGap="s" paddingVertical="s">
				<RecipeCharacteristic Icon={AeroPressIcon} label={recipe.method} />
				<RecipeCharacteristic
					Icon={CoffeeBeansIcon}
					label={`${recipe.coffeeWeight}g`}
				/>
				<RecipeCharacteristic
					Icon={CoffeeScoopIcon}
					label={recipe.coffeeGrind}
				/>
			</Box>
			<Text variant="subheader">Steps</Text>
			<Box rowGap="s">
				{steps.map((step, ix) => (
					<Pressable onPress={() => toggleStep(ix)} key={`recipe-step-${ix}`}>
						<RecipeStepTask step={step} />
					</Pressable>
				))}
			</Box>
		</Box>
	);
};
