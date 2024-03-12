import { Pressable, ScrollView } from "react-native";

import { RecipeStepTask } from ".";
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
		<ScrollView bounces>
			<Box rowGap="s">
				{steps.map((step, ix) => (
					<Pressable onPress={() => toggleStep(ix)} key={`recipe-step-${ix}`}>
						<RecipeStepTask step={step} done={ix <= stepDone} />
					</Pressable>
				))}
			</Box>
		</ScrollView>
	);
};
