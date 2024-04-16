import { createTheme, useTheme } from "@shopify/restyle";

// https://www.happyhues.co/palettes/10
const palette = {
	extraDarkGreen: "#001E1D",
	darkGreen: "#0F3433",
	green: "#004643",
	lightGreen: "#ABD1C6",
	orange: "#F9BC60",
	darkOrange: "#F6A01D",
	cream: "#E8E4E6",
};

const theme = createTheme({
	colors: {
		mainBackground: palette.green,
		secondaryBackground: palette.lightGreen,
		textPrimary: palette.lightGreen,
		textSecondary: palette.extraDarkGreen,
		accent: palette.orange,
		accentDark: palette.darkOrange,
		cardBackground: palette.cream,
		cardHighlight: palette.extraDarkGreen,
		secondaryCardBackground: palette.green,
		secondaryCardHighlight: palette.lightGreen,
		secondaryCardText: palette.darkGreen,
	},
	spacing: {
		xs: 4,
		s: 8,
		m: 16,
		l: 24,
		xl: 40,
	},
	textVariants: {
		defaults: {
			fontFamily: "QuicksandRegular",
			color: "textPrimary",
			fontSize: 16,
		},
		body: {},
		action: {
			fontFamily: "QuicksandSemiBold",
		},
		header: {
			fontFamily: "QuicksandBold",
			fontSize: 34,
		},
		subheader: {
			fontFamily: "QuicksandBold",
			fontSize: 28,
		},
	},
	textInputVariants: {
		defaults: {
			backgroundColor: "secondaryBackground",
			padding: "s",
			borderRadius: 4,
			borderWidth: 1,
			fontSize: 16,
			borderColor: "cardHighlight",
			color: "textSecondary",
			fontWeight: "700",
		},
		base: {},
		focused: {
			borderColor: "accent",
		},
	},
});

export type Theme = typeof theme;
export default theme;

export const useAppTheme = useTheme<Theme>;
