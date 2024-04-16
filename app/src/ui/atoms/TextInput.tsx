import {
	createRestyleComponent,
	createVariant,
	VariantProps,
} from "@shopify/restyle";
import { TextInput as RNTextInput } from "react-native";

import { Theme } from "../theme";

export const TextInput = createRestyleComponent<
	VariantProps<Theme, "textInputVariants"> &
		React.ComponentProps<typeof RNTextInput>,
	Theme
>([createVariant({ themeKey: "textInputVariants" })], RNTextInput);

export type TextInputProps = React.ComponentProps<typeof TextInput>;
