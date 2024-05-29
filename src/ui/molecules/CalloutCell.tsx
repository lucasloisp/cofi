import type { SvgProps } from "react-native-svg";

import { Box } from "../../ui/atoms/Box";
import { Text } from "../../ui/atoms/Text";
import { useAppTheme } from "../../ui/theme";
import { Pressable } from "react-native";
import { useReducer } from "react";

type RecipeCharacteristicProps = {
	Icon: React.ComponentType<SvgProps>;
	label?: string;
	secondaryLabel?: string;
};

export const CalloutCell = ({
	Icon,
	label,
	secondaryLabel = "",
}: RecipeCharacteristicProps) => {
	const { colors } = useAppTheme();
	const [isUp, flip] = useReducer((side: boolean) => !side, true);
	const labelToShow = isUp ? label : secondaryLabel;

	return (
		<Pressable
			disabled={!secondaryLabel}
			onPress={flip}
			style={{ flexGrow: 1 }}
		>
			<Box
				flex={1}
				alignItems="center"
				justifyContent="center"
				backgroundColor="secondaryCardBackground"
				borderColor="secondaryCardHighlight"
				borderWidth={2}
				borderRadius={8}
				padding="m"
			>
				<Icon width={48} height={48} fill={colors.secondaryCardHighlight} />
				{labelToShow && (
					<Text variant="action" color="secondaryCardHighlight">
						{labelToShow}
					</Text>
				)}
			</Box>
		</Pressable>
	);
};
