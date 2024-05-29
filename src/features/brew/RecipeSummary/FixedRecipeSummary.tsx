import { useCallback } from "react";
import { SvgProps } from "react-native-svg";

import CoffeeBeansIcon from "../../../../assets/icons/coffee-beans.svg";
import CoffeeScoopIcon from "../../../../assets/icons/coffee-scoop.svg";
import { CoffeeGrind, CoffeeMethod } from "../../../services/api";
import { t } from "../../../services/strings";
import { Box } from "../../../ui/atoms/Box";
import { CalloutCell } from "../../../ui/molecules/CalloutCell";
import { useGrindSettings } from "../../recipes";
import { MethodIcon } from "../../recipes/MethodIcon";

type FixedRecipeSummaryProps = {
	method: CoffeeMethod;
	coffeeGrind: CoffeeGrind | undefined;
	coffeeWeight: number | undefined;
};

export const FixedRecipeSummary = ({
	method,
	coffeeWeight,
	coffeeGrind,
}: FixedRecipeSummaryProps) => {
	const { data: grindSetting } = useGrindSettings(coffeeGrind);
	const BoundMethodIcon = useCallback(
		(props: SvgProps) => <MethodIcon method={method} {...props} />,
		[method],
	);
	return (
		<Box flexDirection="row" columnGap="s" paddingVertical="s">
			<CalloutCell Icon={BoundMethodIcon} />
			<CalloutCell
				Icon={CoffeeBeansIcon}
				label={`${coffeeWeight?.toFixed(0) ?? "- "}g`}
			/>
			<CalloutCell
				Icon={CoffeeScoopIcon}
				label={t(`grindSize.${coffeeGrind}`, {
					defaultValue: "-",
				})}
				secondaryLabel={`${grindSetting ?? "-"} clicks`}
			/>
		</Box>
	);
};
