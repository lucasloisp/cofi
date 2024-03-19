import { useEffect, useReducer, useState } from "react";

import { formatSeconds } from "../../services/time";
import { Box } from "../../ui/atoms/Box";
import { Button } from "../../ui/atoms/Button";
import { Text } from "../../ui/atoms/Text";

export const BrewTimer = () => {
	const [isActive, toggleIsActive] = useReducer((active) => !active, false);
	const seconds = useStopwatch({ isActive });

	return (
		<Box flexDirection="row" alignItems="center" justifyContent="space-between">
			<Text variant="action">{formatSeconds(seconds)}</Text>
			<Button
				onPress={toggleIsActive}
				tracking={["BrewTimerButton", { Action: isActive ? "stop" : "start" }]}
			>
				{isActive ? "Stop" : "Start"}
			</Button>
		</Box>
	);
};

type UseStopwatchOptions = { isActive: boolean };

const useStopwatch = ({ isActive }: UseStopwatchOptions) => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		if (isActive) {
			const startTime = new Date();
			const interval = setInterval(() => {
				const now = new Date();
				setSeconds((now.getTime() - startTime.getTime()) / 1000);
			}, 100);
			return () => {
				setSeconds(0);
				clearInterval(interval);
			};
		}
	}, [isActive]);

	return seconds;
};
