import { Recipe, RecipeHead } from "./types";

const delay = (ms: number) =>
	new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
const random = (min, max) => Math.round(Math.random() * (max - min) + min);

const MOCK_RECIPES: Recipe[] = [
	{
		id: "recipe.1",
		name: "Smooothy",
		author: "Adib",
		source: "https://aeroprecipe.com/recipes/smooothy",
		method: "AeroPress",
		coffeeWeight: 14,
		coffeeGrind: "Med-fine",
		steps: [
			{ time: 0, description: "Rinse two filters" },
			{ time: 0, description: "Bloom 40g of water" },
			{ time: 30, description: "Add 180g water" },
			{ time: 90, description: "Swirl" },
			{ time: 110, description: "Press for 20 seconds" },
			{ time: 130, description: "Enjoy!" },
		],
	},
	{
		id: "recipe.2",
		name: "The AeroPress Flat White",
		author: "@europeancoffeetrip",
		source: "https://aeroprecipe.com/recipes/aeropress-flat-white",
		method: "AeroPress",
		coffeeWeight: 14,
		coffeeGrind: "Fine",
		steps: [
			{ time: 0, description: "Add 70g of water." },
			{ time: 0, description: "Stir for 20 seconds" },
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
		source: "https://www.youtube.com/watch?v=st571DYYTR8",
		method: "French Press",
		coffeeRatio: 30 / 500,
		coffeeGrind: "Coarse",
		steps: [
			{ time: 0, description: "Don't be in a Hurry" },
			{ time: 0, description: "Add 500ml water" },
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
