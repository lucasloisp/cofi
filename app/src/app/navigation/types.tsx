import { type NativeStackScreenProps } from "@react-navigation/native-stack";

export type AppStackParamList = {
	Home: undefined;
	Brew: undefined;
};

type AppStackScreenProps<T extends keyof AppStackParamList> =
	NativeStackScreenProps<AppStackParamList, T>;

export type HomeScreenProps = AppStackScreenProps<"Home">;
