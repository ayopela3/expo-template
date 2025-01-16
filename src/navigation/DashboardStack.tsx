import { createStackNavigator } from "@react-navigation/stack";

import Home from "@/src/screens/dashboard/home";
import Onboarding from "../screens/auth/onboarding";
import { useBoundStore } from "../store";

const Stack = createStackNavigator();
export function DashboardStack() {
  const store = useBoundStore();

  return (
    <Stack.Navigator>
      {store.isOnboardingDone ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      )}
    </Stack.Navigator>
  );
}
