import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Recipe, RecipeHead, getRecipe, getRecipes } from "../../services/api";

const recipeKeys = {
	all: ["recipes"] as const,
	detail: (id: string) => [...recipeKeys.all, id] as const,
};

export const useRecipes = () => {
	return useQuery<RecipeHead[]>({
		queryKey: recipeKeys.all,
		queryFn: () => getRecipes(),
	});
};

export const useRecipe = (recipeId: string) => {
	const client = useQueryClient();
	return useQuery<Partial<Recipe> & RecipeHead>({
		queryKey: recipeKeys.detail(recipeId),
		placeholderData: () =>
			client
				.getQueryData<RecipeHead[]>(recipeKeys.all)
				?.find((r) => r.id === recipeId),
		queryFn: () => getRecipe(recipeId),
	});
};
