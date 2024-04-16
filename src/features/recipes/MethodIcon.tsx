import { SvgProps } from "react-native-svg";

import AeroPressIcon from "../../../assets/icons/aeropress.svg";
import FrenchPressIcon from "../../../assets/icons/frenchpress.svg";
import { CoffeeMethod } from "../../services/api";

type MethodIconProps = {
	method: CoffeeMethod;
} & SvgProps;

export const MethodIcon = ({ method, ...props }: MethodIconProps) => {
	switch (method) {
		case "French Press":
			return <FrenchPressIcon {...props} />;
		case "Pour Over":
		case "Espresso":
		case "AeroPress":
			return <AeroPressIcon {...props} />;
	}
};
