import React from "react";
import { Pressable, TextProps } from "react-native";

import { Box } from "./Box";
import { Text } from "./Text";
import { TrackingProps, useClickMetrics } from "../../services/analytics";

type ButtonProps = {
	onPress: () => void;
} & Pick<TextProps, "children"> &
	TrackingProps;

export const Button = ({ onPress, children, tracking }: ButtonProps) => {
	const trackedOnPress = useClickMetrics(tracking, onPress);
	return (
		<Pressable onPress={trackedOnPress}>
			{({ pressed }) => (
				<Box
					backgroundColor={pressed ? "accentDark" : "accentLight"}
					padding="m"
					borderRadius={4}
				>
					<Text variant="action">{children}</Text>
				</Box>
			)}
		</Pressable>
	);
};
