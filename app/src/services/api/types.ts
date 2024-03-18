type CoffeeMethod = "AeroPress" | "Pour Over" | "French Press" | "Espresso";
type CoffeeGrind = "Coarse" | "Med-coarse" | "Medium" | "Med-fine" | "Fine";
export type RecipeStep = {
	time: number;
	description: string;
};
export type Recipe = {
	id: string;
	name: string;
	author: string;
	source: string;
	method: CoffeeMethod;
	coffeeGrind: CoffeeGrind;
	steps: RecipeStep[];
} & (
	| { coffeeWeight: number; coffeeRatio?: undefined }
	| { coffeeWeight?: undefined; coffeeRatio: number }
);

export type RecipeHead = Pick<
	Recipe,
	"id" | "author" | "name" | "method" | "source"
>;
