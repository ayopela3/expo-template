import { createStackNavigator } from "@react-navigation/stack";

import Home from "@/src/screens/dashboard/home";
import Onboarding from "../screens/dashboard/onboarding";
import { useBoundStore } from "../store";
import { screenOption } from "../utils/screenOption";

const Stack = createStackNavigator();
export function DashboardStack() {
  const store = useBoundStore();

  return (
    <Stack.Navigator>
      {store.isOnboardingDone ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <Stack.Screen
          name="Onboarding"
          options={screenOption}
          component={Onboarding}
        />
      )}
    </Stack.Navigator>
  );
}
