import React from "react";
import { Pressable } from "react-native";

import { Box } from "./Box";
import { Text, type TextProps } from "./Text";
import { TrackingProps, useClickMetrics } from "../../services/analytics";

type ButtonProps = {
	onPress: () => void;
} & Pick<TextProps, "children" | "textAlign"> &
	TrackingProps;

export const Button = ({
	onPress,
	children,
	tracking,
	textAlign,
}: ButtonProps) => {
	const trackedOnPress = useClickMetrics(tracking, onPress);
	return (
		<Pressable onPress={trackedOnPress}>
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
