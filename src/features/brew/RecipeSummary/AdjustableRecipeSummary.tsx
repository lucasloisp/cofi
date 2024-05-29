import { useState } from "react";

import { BrewSizeAdjustment } from "./BrewSizeAdjustment";
import { FixedRecipeSummary } from "./FixedRecipeSummary";
import { CoffeeGrind, CoffeeMethod } from "../../../services/api";
import { CUP_SIZE_ML } from "../constants";

type AdjustableRecipeSummaryProps = {
	method: CoffeeMethod;
	coffeeGrind: CoffeeGrind | undefined;
	coffeeRatio: number;
};

export const AdjustableRecipeSummary = ({
	method,
	coffeeGrind,
	coffeeRatio,
}: AdjustableRecipeSummaryProps) => {
	const [drinkSize, setDrinkSize] = useState(CUP_SIZE_ML);
	const coffeeWeight = coffeeRatio * drinkSize;

	return (
		<>
			<FixedRecipeSummary
				method={method}
				coffeeWeight={coffeeWeight}
				coffeeGrind={coffeeGrind}
			/>
			<BrewSizeAdjustment size={drinkSize} setSize={setDrinkSize} />
		</>
	);
};
