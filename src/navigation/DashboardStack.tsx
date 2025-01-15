import Home from "@/src/screens/dashboard/home";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
