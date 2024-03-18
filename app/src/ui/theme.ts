import { createTheme, useTheme } from "@shopify/restyle";

// https://www.happyhues.co/palettes/10
const theme = createTheme({
	colors: {
		mainBackground: "#004643",
		cardPrimaryBackground: "#ABD1C6",
		textPrimary: "#ABD1C6",
		textSecondary: "#001E1D",
		textTertiary: "#0F3433",
		accent: "#F9BC60",
		accentDark: "#F6A01D",
		cardBackground: "#E8E4E6",
		cardHighlight: "#001E1D",
	},
	spacing: {
		xs: 4,
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
		emph: {
			fontFamily: "Quicksand_600SemiBold",
		},
		light: {
			fontFamily: "Quicksand_300Light",
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
