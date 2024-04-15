import { CoffeeGrind } from "./api";

export const getGrindSettings = (grind: CoffeeGrind) => {
	switch (grind) {
		case "Coarse":
			return 20;
		case "Med-coarse":
			return 18;
		case "Medium":
		case "Med-fine":
			return 13;
		case "Fine":
			return 8;
	}
};
