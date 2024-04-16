import React from "react";
import { Pressable } from "react-native";

import { Box } from "./Box";
import { Text, type TextProps } from "./Text";

type ButtonProps = {
	onPress: () => void;
} & Pick<TextProps, "children" | "textAlign">;

export const Button = ({
	onPress,
	children,
	textAlign = "center",
}: ButtonProps) => {
	return (
		<Pressable onPress={onPress}>
			{({ pressed }) => (
				<Box
					backgroundColor={pressed ? "accentDark" : "accent"}
					padding="m"
					borderRadius={4}
					shadowColor="textSecondary"
				>
					<Text variant="action" color="textSecondary" textAlign={textAlign}>
						{children}
					</Text>
				</Box>
			)}
		</Pressable>
	);
};
