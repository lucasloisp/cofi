import {
	useFonts,
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
	Quicksand_700Bold,
	Quicksand_300Light,
} from "@expo-google-fonts/quicksand";

export const useLoadFonts = () => {
	return useFonts({
		QuicksandLight: Quicksand_300Light,
		QuicksandRegular: Quicksand_400Regular,
		QuicksandMedium: Quicksand_500Medium,
		QuicksandSemiBold: Quicksand_600SemiBold,
		QuicksandBold: Quicksand_700Bold,
	});
};
