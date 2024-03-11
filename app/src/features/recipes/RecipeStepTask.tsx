import { RecipeStep } from "./types";
import { Box } from "../../ui/atoms/Box";
import { Text } from "../../ui/atoms/Text";

type RecipeStepProps = {
	step: RecipeStep & { done: boolean };
};

export const RecipeStepTask = ({
	step: { time, done, description },
}: RecipeStepProps) => {
	return (
		<Box
			borderColor={done ? "mainBackground" : "accentLight"}
			borderWidth={2}
			padding="m"
			borderRadius={4}
			flexDirection="row"
			justifyContent="space-between"
		>
			<Text
				variant="body"
				textDecorationLine={done ? "line-through" : undefined}
			>
				{description}
			</Text>
			<Text
				variant="action"
				textDecorationLine={done ? "line-through" : undefined}
			>
				{formatTime(time)}
			</Text>
		</Box>
	);
};

/**
 * Formats the given time duration as MM:ss.
 * @param time the number of seconds
 */
const formatTime = (time: number): string => {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
