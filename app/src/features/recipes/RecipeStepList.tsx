import { Pressable } from "react-native";

import { RecipeStepTask } from "./RecipeStepTask";
import { Recipe } from "./types";
import { Box } from "../../ui/atoms/Box";

type RecipeStepListProps = {
	steps: Recipe["steps"];
	toggleStep: (ix: number) => void;
	stepDone: number;
};
export const RecipeStepList = ({
	steps,
	stepDone,
	toggleStep,
}: RecipeStepListProps) => {
	return (
		<Box rowGap="s">
			{steps.map((step, ix) => (
				<Pressable onPress={() => toggleStep(ix)} key={`recipe-step-${ix}`}>
					<RecipeStepTask step={step} done={ix <= stepDone} />
				</Pressable>
			))}
		</Box>
	);
};
