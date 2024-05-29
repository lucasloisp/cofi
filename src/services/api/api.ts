import { Recipe } from "./types";

const delay = (ms: number) =>
	new Promise<void>((resolve) => setTimeout(() => resolve(), ms));

const random = (min: number, max: number) =>
	Math.round(Math.random() * (max - min) + min);

const MOCK_RECIPES: Recipe[] = [
	{
		id: "recipe.1",
		name: "Smooothy",
		author: "Adib",
		source: {
			name: "AeroPrecipe",
			url: "https://aeroprecipe.com/recipes/smooothy",
		},
		method: "AeroPress",
		coffeeWeight: 14,
		coffeeGrind: "med_fine",
		steps: [
			{ description: "Rinse two filters" },
			{ description: "Bloom 40g of water" },
			{ time: 30, description: "Add 180g water" },
			{ time: 90, description: "Swirl" },
			{ time: 110, description: "Press for 20 seconds" },
			{ description: "Enjoy!" },
		],
	},
	{
		id: "recipe.2",
		name: "The AeroPress Flat White",
		author: "@europeancoffeetrip",
		source: {
			name: "AeroPrecipe",
			url: "https://aeroprecipe.com/recipes/aeropress-flat-white",
		},
		method: "AeroPress",
		coffeeWeight: 14,
		coffeeGrind: "fine",
		steps: [
			{ description: "Add 70g of water." },
			{ description: "Stir for 20 seconds" },
			{ time: 20, description: "Press" },
			{ time: 40, description: "Froth 100ml of milk (60℃)" },
			{ time: 50, description: "Dilute the coffee" },
			{ time: 60, description: "Enjoy!" },
		],
	},
	{
		id: "recipe.3",
		name: "Ultimate French Press",
		author: "James Hoffmann",
		source: {
			name: "James Hoffmann @ YT",
			url: "https://www.youtube.com/watch?v=st571DYYTR8",
		},
		method: "French Press",
		coffeeRatio: 30 / 500,
		coffeeGrind: "med_coarse",
		steps: [
			{ description: "Don't be in a Hurry" },
			{ description: "Add in the water" },
			{ time: 60 * 4, description: "Stir the crust" },
			{ time: 60 * 4, description: "Scoop off the foam" },
			{ time: 60 * 9, description: "Put the plunger in, to the surface" },
			{ time: 60 * 9, description: "Pur the coffee into the cup" },
			{ time: 60 * 9, description: "Enjoy!" },
		],
	},
];

export const getRecipes = async () => {
	await delay(random(80, 800));
	return MOCK_RECIPES.map(({ name, id, author, method, source }) => ({
		name,
		id,
		author,
		method,
		source,
	}));
};

export const getRecipe = async (recipeId: string) => {
	await delay(random(800, 1200));
	const recipe = MOCK_RECIPES.find((r) => r.id === recipeId);
	if (!recipe) {
		throw new Error(`Recipe with id ${recipeId} not found`);
	}
	return recipe;
};
