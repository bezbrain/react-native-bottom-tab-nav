import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Welcome" component={WelcomeScreen} />
        <BottomTab.Screen name="User" component={UserScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
