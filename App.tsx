import { StatusBar } from "expo-status-bar";
import "./global.css";

import { useColorScheme } from "react-native";
import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStack } from "./src/navigation/AuthStack";
import { DashboardStack } from "./src/navigation/DashboardStack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: useColorScheme() === "dark" ? "#202020" : "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GluestackUIProvider mode="system">
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Auth"
              options={{ headerShown: false }}
              component={AuthStack}
            />
            <Stack.Screen
              name="Dashboard"
              options={{ headerShown: false }}
              component={DashboardStack}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </View>
  );
}
