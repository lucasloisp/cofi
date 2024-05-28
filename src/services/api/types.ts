export type CoffeeMethod =
	| "AeroPress"
	| "Pour Over"
	| "French Press"
	| "Espresso";

export type CoffeeGrind =
	| "coarse"
	| "med_coarse"
	| "medium"
	| "med_fine"
	| "fine";

export type RecipeStep = {
	time?: number;
	description: string;
};

export type Recipe = {
	id: string;
	name: string;
	author: string;
	source: { url: string; name: string };
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
