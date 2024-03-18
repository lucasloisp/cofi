import { CUP_SIZE_ML } from "./constants";
import { Box } from "../../ui/atoms/Box";
import { Button } from "../../ui/atoms/Button";
import { Text } from "../../ui/atoms/Text";

type BrewSizeAdjustmentProps = {
	size: number;
	setSize: (size: number) => void;
};
export const BrewSizeAdjustment = ({
	size,
	setSize,
}: BrewSizeAdjustmentProps) => {
	return (
		<Box
			flexDirection="row"
			alignItems="center"
			justifyContent="space-between"
			columnGap="s"
		>
			<Box flex={2}>
				<Button
					tracking="BrewSizeDecreaseButton"
					textAlign="center"
					onPress={() => setSize(Math.max(size - CUP_SIZE_ML, 0))}
				>
					Less
				</Button>
			</Box>
			<Box flex={1}>
				<Text textAlign="center">{size} ml</Text>
			</Box>
			<Box flex={2}>
				<Button
					tracking="BrewSizeIncreaseButton"
					textAlign="center"
					onPress={() => setSize(size + CUP_SIZE_ML)}
				>
					More
				</Button>
			</Box>
		</Box>
	);
};
