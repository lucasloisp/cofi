import { CUP_SIZE_ML } from "./constants";
import { t } from "../../services/strings";
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
		<Box flexDirection="row" alignItems="center" justifyContent="space-between">
			<Box flex={1}>
				<Button onPress={() => setSize(Math.max(size - CUP_SIZE_ML, 0))}>
					{t("brewing.decreaseSizeButton")}
				</Button>
			</Box>
			<Box alignItems="center" marginHorizontal="m">
				<Text variant="body">{t("brewing.drinkSizeLabel", { size })}</Text>
			</Box>
			<Box flex={1}>
				<Button onPress={() => setSize(size + CUP_SIZE_ML)}>
					{t("brewing.increaseSizeButton")}
				</Button>
			</Box>
		</Box>
	);
};
