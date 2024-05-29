import { Linking } from "react-native";

import { Recipe } from "../../services/api";
import { t } from "../../services/strings";
import { Button } from "../../ui/atoms/Button";

type RecipeSourceProps = { source: NonNullable<Recipe["source"]> };
export const RecipeSource = ({ source }: RecipeSourceProps) => {
	return (
		<Button onPress={() => Linking.openURL(source.url)} textAlign="left">
			{t("brewScreen.linkToSource", { name: source.name })}
		</Button>
	);
};
