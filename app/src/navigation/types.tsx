import { type NativeStackScreenProps } from "@react-navigation/native-stack";

export type AppStackParamList = {
	Home: undefined;
	Brew: { recipeId: string };
};

type AppStackScreenProps<T extends keyof AppStackParamList> =
	NativeStackScreenProps<AppStackParamList, T>;

export type HomeScreenProps = AppStackScreenProps<"Home">;
export type BrewScreenProps = AppStackScreenProps<"Brew">;
