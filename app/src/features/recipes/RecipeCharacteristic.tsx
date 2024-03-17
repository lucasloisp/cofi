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
	const { textPrimary } = useAppTheme().colors;

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
		</Box>
	);
};
