import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./types";
import { BrewScreen } from "./screens/BrewScreen";
import { HomeScreen } from "./screens/HomeScreen";

const AppStack = createNativeStackNavigator<AppStackParamList>();
export const Router = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="Brew" component={BrewScreen} />
    </AppStack.Navigator>
  );
};
