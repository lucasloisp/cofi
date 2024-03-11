import { useQuery } from "@tanstack/react-query";

import { Recipe } from "./types";

const MOCK_RECIPES: Recipe[] = [
	{
		id: 1,
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
];

export const useRecipes = () => {
	return useQuery({
		queryKey: ["recipes"],
		queryFn: () =>
			Promise.resolve(
				MOCK_RECIPES.map(({ name, id, author, method }) => ({
					name,
					id,
					author,
					method,
				})),
			),
	});
};

export const useRecipe = (recipeId: number) => {
	return useQuery<Recipe>({
		queryKey: ["recipe", recipeId],
		queryFn: async () => {
			const recipe = MOCK_RECIPES.find((r) => r.id === recipeId);
			if (!recipe) {
				throw new Error(`Recipe with id ${recipeId} not found`);
			}
			return recipe;
		},
	});
};
