import {
	skipToken,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";

import {
	CoffeeGrind,
	Recipe,
	RecipeHead,
	getRecipe,
	getRecipes,
} from "../../services/api";
import { getGrindSettings, setGrindSettings } from "../../services/preferences";

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
	grind: (size: CoffeeGrind) => ["settings", "grind", { size }] as const,
};

export const useGrindSettings = (coffeeGrind: CoffeeGrind | undefined) => {
	return useQuery({
		queryKey: settingsKeys.grind(coffeeGrind!),
		queryFn: coffeeGrind ? () => getGrindSettings(coffeeGrind) : skipToken,
	});
};

export const useGrindSettingsMutation = (grind: CoffeeGrind) => {
	const client = useQueryClient();
	const queryKey = settingsKeys.grind(grind);
	return useMutation({
		mutationFn: (setting: number) => setGrindSettings(grind, setting),
		onMutate: async (setting: number) => {
			await client.cancelQueries({ queryKey });
			const previousSetting = client.getQueryData(queryKey);
			client.setQueryData(queryKey, () => setting);
			return { previousSetting };
		},
		onError: (_err, _newSetting, context) => {
			client.setQueryData(queryKey, context?.previousSetting);
		},
		onSettled: () => {
			client.invalidateQueries({ queryKey });
		},
	});
};
