type CoffeeMethod = "AeroPress" | "Pour Over" | "French Press" | "Espresso";
type CoffeeGrind = "Coarse" | "Med-coarse" | "Medium" | "Med-fine" | "Fine";
export type RecipeStep = {
	time: number;
	description: string;
};
export type Recipe = {
	id: number;
	name: string;
	author: string;
	source: string;
	method: CoffeeMethod;
	coffeeWeight: number;
	coffeeGrind: CoffeeGrind;
	steps: RecipeStep[];
};
