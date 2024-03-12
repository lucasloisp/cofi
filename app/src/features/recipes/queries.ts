import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Recipe, RecipeHead } from "./types";

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
];

export const useRecipes = () => {
	return useQuery<RecipeHead[]>({
		queryKey: ["recipes"],
		queryFn: () =>
			Promise.resolve(
				MOCK_RECIPES.map(({ name, id, author, method, source }) => ({
					name,
					id,
					author,
					method,
					source,
				})),
			),
	});
};

export const useRecipe = (recipeId: string) => {
	const client = useQueryClient();
	return useQuery<Partial<Recipe> & RecipeHead>({
		queryKey: ["recipes", recipeId],
		initialData: () => {
			return client
				.getQueryData<RecipeHead[]>(["recipes"])
				?.find((r) => r.id === recipeId);
		},
		queryFn: async () => {
			const recipe = MOCK_RECIPES.find((r) => r.id === recipeId);
			if (!recipe) {
				throw new Error(`Recipe with id ${recipeId} not found`);
			}
			return recipe;
		},
	});
};
