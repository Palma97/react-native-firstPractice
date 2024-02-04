import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectorSection from "./screens/SelectorSection";
import HomeScreen from "./screens/HomeScreen";
import HamiScreen from "./screens/Hami";
import SnoopScreen from "./screens/Snoop";

const HomeStack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <HomeStack.Navigator initialRoute="Home">
      <HomeStack.Screen name=">Home" component={HomeScreen} />
      <HomeStack.Screen name="Selector" component={SelectorSection} />
      <HomeStack.Screen name="¡Hami!" component={HamiScreen} />
      <HomeStack.Screen name="¡Este no es!" component={SnoopScreen} />
    </HomeStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
