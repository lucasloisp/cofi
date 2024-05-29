import { useAtom } from "jotai";

import { RecipeStep } from "../../services/api";
import { formatSeconds } from "../../services/time";
import { Box } from "../../ui/atoms/Box";
import { Text } from "../../ui/atoms/Text";
import { timerElapsedAtom } from "../brew/timerAtom";

type RecipeStepProps = {
	step: RecipeStep;
	done: boolean;
	timerShown: boolean;
};

export const RecipeStepTask = ({
	step: { time, description },
	done,
	timerShown,
}: RecipeStepProps) => {
	const [timeElapsed] = useAtom(timerElapsedAtom);
	const isTaskTimerVisible = time !== undefined && timerShown;
	const timeUntilTask = Math.max((time ?? timeElapsed) - timeElapsed, 0);
	return (
		<Box
			flexDirection="row"
			justifyContent="space-between"
			backgroundColor="cardBackground"
			borderColor="cardHighlight"
			borderWidth={1}
			borderRadius={4}
			padding="m"
		>
			<Text
				variant="body"
				color="secondaryCardText"
				textDecorationLine={done ? "line-through" : "none"}
			>
				{description}
			</Text>
			{!done && isTaskTimerVisible && (
				<Text variant="action" color="secondaryCardText">
					In {formatSeconds(timeUntilTask)}
				</Text>
			)}
		</Box>
	);
};
