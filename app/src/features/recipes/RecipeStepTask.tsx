import { RecipeStep } from "./types";
import { formatSeconds } from "../../services/time";
import { Box } from "../../ui/atoms/Box";
import { Text } from "../../ui/atoms/Text";

type RecipeStepProps = {
	step: RecipeStep;
	done: boolean;
};

export const RecipeStepTask = ({
	step: { time, description },
	done,
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
				{formatSeconds(time)}
			</Text>
		</Box>
	);
};
