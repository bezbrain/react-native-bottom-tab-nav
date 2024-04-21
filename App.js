import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "red" },
            headerTintColor: "white",
            tabBarStyle: { backgroundColor: "red", paddingBottom: 4 },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "#cccccc",
          }}
        >
          <BottomTab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => {
                return <AntDesign name="home" size={size} color={color} />;
              },
            }}
          />
          <BottomTab.Screen
            name="User"
            component={UserScreen}
            options={{
              tabBarLabel: "New User",
              tabBarIcon: ({ color, size }) => {
                return <AntDesign name="adduser" size={size} color={color} />;
              },
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
