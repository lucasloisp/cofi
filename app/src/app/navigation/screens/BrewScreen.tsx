import { Linking, Pressable } from "react-native";

import AeroPressIcon from "../../../../assets/icons/aeropress.svg";
import CoffeeBeansIcon from "../../../../assets/icons/coffee-beans.svg";
import CoffeeScoopIcon from "../../../../assets/icons/coffee-scoop.svg";
import { Box } from "../../../ui/atoms/Box";
import { Text } from "../../../ui/atoms/Text";
import { useAppTheme } from "../../../ui/theme";

export const BrewScreen = () => {
	const {
		colors: { textPrimary },
	} = useAppTheme();
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
			<Box flexDirection="row" columnGap="s" paddingVertical="s">
				{/* TODO: Add shadow */}
				<Box
					flex={1}
					alignItems="center"
					justifyContent="space-between"
					padding="m"
					borderRadius={8}
					borderColor="accentDark"
					borderWidth={2}
				>
					<AeroPressIcon width={48} height={48} fill={textPrimary} />
					<Text variant="body">AeroPress</Text>
					{/* Two Filters, rinsed */}
				</Box>
				<Box
					flex={1}
					alignItems="center"
					padding="m"
					borderRadius={8}
					borderColor="accentDark"
					borderWidth={2}
				>
					<CoffeeBeansIcon width={48} height={48} fill={textPrimary} />
					<Text variant="body">14g</Text>
				</Box>
				<Box
					flex={1}
					alignItems="center"
					padding="m"
					borderRadius={8}
					borderColor="accentDark"
					borderWidth={2}
				>
					<CoffeeScoopIcon width={48} height={48} fill={textPrimary} />
					<Text variant="body">Med-fine</Text>
					{/* 10 clicks on C3 */}
				</Box>
			</Box>
			<Text variant="body">
				1. (0:00) Bloom 40g of water{"\n"}
				2. (0:30) Add 180g water{"\n"}
				3. (1:30) Swirl{"\n"}
				4. (1:50) Press for 20 seconds{"\n"}
				4. (2:10) Enjoy!
			</Text>
		</Box>
	);
};
