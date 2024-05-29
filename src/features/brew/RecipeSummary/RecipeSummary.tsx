import { AdjustableRecipeSummary } from "./AdjustableRecipeSummary";
import { FixedRecipeSummary } from "./FixedRecipeSummary";
import { Recipe, RecipeHead } from "../../../services/api";

type RecipeSummaryProps = {
	recipe: Partial<Recipe> & RecipeHead;
};

export const RecipeSummary = ({ recipe }: RecipeSummaryProps) => {
	if (recipe.coffeeRatio !== undefined) {
		return (
			<AdjustableRecipeSummary
				method={recipe.method}
				coffeeGrind={recipe.coffeeGrind}
				coffeeRatio={recipe.coffeeRatio}
			/>
		);
	}

	return (
		<FixedRecipeSummary
			method={recipe.method}
			coffeeWeight={recipe.coffeeWeight}
			coffeeGrind={recipe.coffeeGrind}
		/>
	);
};
