import type { SvgProps } from "react-native-svg";

import { Box } from "../../ui/atoms/Box";
import { Text } from "../../ui/atoms/Text";
import { useAppTheme } from "../../ui/theme";

type RecipeCharacteristicProps = {
	Icon: React.ComponentType<SvgProps>;
	label: string;
};

export const CalloutCell = ({ Icon, label }: RecipeCharacteristicProps) => {
	const { colors } = useAppTheme();

	return (
		<Box
			flex={1}
			alignItems="center"
			justifyContent="space-between"
			backgroundColor="secondaryCardBackground"
			borderColor="secondaryCardHighlight"
			borderWidth={2}
			borderRadius={8}
			padding="m"
		>
			<Icon width={48} height={48} fill={colors.secondaryCardHighlight} />
			<Text variant="action" color="secondaryCardHighlight">
				{label}
			</Text>
		</Box>
	);
};
