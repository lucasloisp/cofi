import { RecipeStep } from "../../services/api";
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
			{time !== undefined && (
				<Text
					variant="action"
					color="secondaryCardText"
					textDecorationLine={done ? "line-through" : "none"}
				>
					{formatSeconds(time)}
				</Text>
			)}
		</Box>
	);
};
