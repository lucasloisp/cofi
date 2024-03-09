import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from "@react-navigation/native-stack";

type AppStackParamList = {
  Home: undefined;
  Brew: undefined;
};

type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

type HomeScreenProps = AppStackScreenProps<"Home">;
type BrewScreenProps = AppStackScreenProps<"Brew">;

const AppStack = createNativeStackNavigator<AppStackParamList>();

const BrewScreen = () => {
  return <Text>Brew Screen</Text>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Brew" onPress={() => navigation.navigate("Brew")} />
    </View>
  );
};

const Router = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="Brew" component={BrewScreen} />
    </AppStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
