import { useAtom } from "jotai";
import { useReducer } from "react";

import { timestampAtom, useStopwatch } from "./timerAtom";
import { t } from "../../services/strings";
import { Box } from "../../ui/atoms/Box";
import { Button } from "../../ui/atoms/Button";
import { Text } from "../../ui/atoms/Text";

export const BrewTimer = () => {
	const [isActive, toggleIsActive] = useReducer((active) => !active, false);
	useStopwatch({ isActive });
	const [timestamp] = useAtom(timestampAtom);

	return (
		<Box flexDirection="row" alignItems="center" justifyContent="space-between">
			<Text variant="action">{timestamp}</Text>
			<Button onPress={toggleIsActive}>
				{isActive
					? t("brewing.timerStopButton")
					: t("brewing.timerStartButton")}
			</Button>
		</Box>
	);
};
