import type { SvgProps } from "react-native-svg";

import { Box } from "../../ui/atoms/Box";
import { Text } from "../../ui/atoms/Text";
import { useAppTheme } from "../../ui/theme";

type RecipeCharacteristicProps = {
	Icon: React.ComponentType<SvgProps>;
	label: string;
};

export const RecipeCharacteristic = ({
	Icon,
	label,
}: RecipeCharacteristicProps) => {
	const { colors } = useAppTheme();

	return (
		<Box
			flex={1}
			alignItems="center"
			justifyContent="space-between"
			padding="m"
			borderRadius={8}
			borderColor="accent"
			borderWidth={2}
		>
			<Icon width={48} height={48} fill={colors.textPrimary} />
			<Text variant="action">{label}</Text>
		</Box>
	);
};
