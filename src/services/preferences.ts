import AsyncStorage from "@react-native-async-storage/async-storage";

import { CoffeeGrind } from "./api";

export const setGrindSettings = (grind: CoffeeGrind, setting: number) => {
	return AsyncStorage.setItem(
		`settings.grinder.${grind}`,
		JSON.stringify(setting),
	);
};
export const getGrindSettings = async (grind: CoffeeGrind) => {
	const setting = await AsyncStorage.getItem(`settings.grinder.${grind}`);
	if (setting) {
		return JSON.parse(setting) as number;
	}
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
