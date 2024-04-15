import { CoffeeGrind } from "./api";

export const getGrindSettings = (grind: CoffeeGrind) => {
	switch (grind) {
		case "coarse":
			return 20;
		case "med_coarse":
			return 18;
		case "medium":
		case "med_fine":
			return 13;
		case "fine":
			return 8;
	}
};
