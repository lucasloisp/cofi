import {
	DefaultTheme as DefaultNavigationTheme,
	NavigationContainer,
	Theme as NavigationTheme,
	useNavigationContainerRef,
} from "@react-navigation/native";
import React, { useMemo } from "react";

import { Router } from "./Router";
import { useAppTheme } from "../ui/theme";

const useNavigationTheme = (): NavigationTheme => {
	const appTheme = useAppTheme();
	return useMemo(
		() => ({
			...DefaultNavigationTheme,
			colors: {
				...DefaultNavigationTheme.colors,
				background: appTheme.colors.mainBackground,
				primary: appTheme.colors.textSecondary,
				border: appTheme.colors.accentDark,
				card: appTheme.colors.secondaryBackground,
				text: appTheme.colors.textSecondary,
			},
		}),
		[appTheme],
	);
};

export const AppNavigationContainer = () => {
	const navigationTheme = useNavigationTheme();
	const navigationRef = useNavigationContainerRef();
	return (
		<NavigationContainer ref={navigationRef} theme={navigationTheme}>
			<Router />
		</NavigationContainer>
	);
};
