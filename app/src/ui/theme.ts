import { createTheme, useTheme } from "@shopify/restyle";

const palette = {
	purpleLight: "#8C6FF7",
	purplePrimary: "#5A31F4",
	purpleDark: "#3F22AB",
	greenLight: "#56DCBA",
	greenPrimary: "#0ECD9D",
	greenDark: "#0A906E",
	grey: "#373B45",
	black: "#0B0B0B",
	white: "#F0F2F3",
};

const theme = createTheme({
	colors: {
		mainBackground: palette.grey,
		cardPrimaryBackground: palette.white,
		textPrimary: palette.white,
		textSecondary: palette.grey,
		accent: palette.greenPrimary,
		accentDark: palette.greenDark,
		accentLight: palette.greenLight,
	},
	spacing: {
		s: 8,
		m: 16,
		l: 24,
		xl: 40,
	},
	textVariants: {
		header: {
			fontFamily: "Quicksand_700Bold",
			fontSize: 34,
		},
		subheader: {
			fontFamily: "Quicksand_500Medium",
			fontSize: 30,
		},
		body: {},
		action: {
			fontFamily: "Quicksand_600SemiBold",
			fontSize: 16,
		},
		defaults: {
			fontFamily: "Quicksand_400Regular",
			color: "textPrimary",
			fontSize: 16,
		},
	},
});

export type Theme = typeof theme;
export default theme;

export const useAppTheme = useTheme<Theme>;
