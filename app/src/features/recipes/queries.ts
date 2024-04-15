import { skipToken, useQuery, useQueryClient } from "@tanstack/react-query";

import {
	CoffeeGrind,
	Recipe,
	RecipeHead,
	getRecipe,
	getRecipes,
} from "../../services/api";
import { getGrindSettings } from "../../services/preferences";

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

const settingsKeys = {
	all: ["settings"] as const,
};

export const useGrindSettings = (coffeeGrind: CoffeeGrind | undefined) => {
	return useQuery({
		queryKey: settingsKeys.all,
		queryFn: coffeeGrind ? () => getGrindSettings(coffeeGrind) : skipToken,
	});
};
