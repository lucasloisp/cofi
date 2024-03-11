import { Linking, Pressable } from "react-native";
import type { SvgProps } from "react-native-svg";

import AeroPressIcon from "../../../../assets/icons/aeropress.svg";
import CoffeeBeansIcon from "../../../../assets/icons/coffee-beans.svg";
import CoffeeScoopIcon from "../../../../assets/icons/coffee-scoop.svg";
import { Box } from "../../../ui/atoms/Box";
import { Text } from "../../../ui/atoms/Text";
import { useAppTheme } from "../../../ui/theme";

type RecipeCharacteristicProps = {
	Icon: React.ComponentType<SvgProps>;
	label: string;
};
const RecipeCharacteristic = ({ Icon, label }: RecipeCharacteristicProps) => {
	const { textPrimary } = useAppTheme().colors;

	// TODO: Add shadow
	return (
		<Box
			flex={1}
			alignItems="center"
			justifyContent="space-between"
			padding="m"
			borderRadius={8}
			borderColor="accentDark"
			borderWidth={2}
		>
			<Icon width={48} height={48} fill={textPrimary} />
			<Text variant="body">{label}</Text>
			{/* Two Filters, rinsed */}
		</Box>
	);
};

export const BrewScreen = () => {
	const recipe = {
		name: "Smooothy",
		author: "Adib",
		source: "https://aeroprecipe.com/recipes/smooothy",
		method: "AeroPress",
		coffeeWeight: 14,
		coffeeGrind: "Med-fine",
	};
	const steps = [
		{ time: 0, description: "Bloom 40g of water" },
		{ time: 30, description: "Add 180g water" },
		{ time: 90, description: "Swirl" },
		{ time: 110, description: "Press for 20 seconds" },
		{ time: 130, description: "Enjoy!" },
	];
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
				{steps.map(({ time, description }, ix) => (
					<Box
						key={`recipe-step-${ix}`}
						borderColor="accentDark"
						borderWidth={2}
						padding="m"
						borderRadius={4}
						flexDirection="row"
						justifyContent="space-between"
					>
						<Text variant="body">{description}</Text>
						<Text variant="action">{formatTime(time)}</Text>
					</Box>
				))}
			</Box>
		</Box>
	);
};

/**
 * Formats the given time duration as MM:ss.
 * @param time the number of seconds
 */
const formatTime = (time: number): string => {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
