import { ScrollView } from "react-native";

import {
	useGrindSettings,
	useGrindSettingsMutation,
} from "../../features/recipes";
import { CoffeeGrind } from "../../services/api";
import { t } from "../../services/strings";
import { Box } from "../../ui/atoms/Box";
import { Text } from "../../ui/atoms/Text";
import { TextInput } from "../../ui/atoms/TextInput";

export const SettingsScreen = () => {
	return (
		<ScrollView keyboardShouldPersistTaps="handled">
			<Box paddingHorizontal="m">
				<Text variant="subheader">{t("settingsScreen.grinderSection")}</Text>
				<Box rowGap="s">
					<GrindSizeSetting grind="coarse" />
					<GrindSizeSetting grind="med_coarse" />
					<GrindSizeSetting grind="medium" />
					<GrindSizeSetting grind="med_fine" />
					<GrindSizeSetting grind="fine" />
				</Box>
			</Box>
		</ScrollView>
	);
};

const GrindSizeSetting = ({ grind }: { grind: CoffeeGrind }) => {
	const { data: grindSetting = 0 } = useGrindSettings(grind);
	const { mutate } = useGrindSettingsMutation(grind);
	return (
		<Box flexDirection="row" alignItems="center" justifyContent="space-between">
			<Text variant="action">{t(`grindSize.${grind}`)}</Text>
			<TextInput
				value={grindSetting.toString()}
				keyboardType="numeric"
				onChangeText={(text) => mutate(Number(text))}
			/>
		</Box>
	);
};
