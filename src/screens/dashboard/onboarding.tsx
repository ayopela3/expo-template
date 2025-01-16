import { Box } from "@/src/components/ui/box";
import { Button, ButtonText } from "@/src/components/ui/button";
import { Text } from "@/src/components/ui/text";
import { useBoundStore } from "@/src/store";
import DashboardLayout from "./_layout";
import { HStack } from "@/src/components/ui/hstack";

export default function Onboarding() {
  const store = useBoundStore();
  return (
    <DashboardLayout>
      <Box className="w-full pl-4 pr-4">
        <HStack className="justify-between ">
          <Box />
          <Button
            variant="link"
            className="end-0 mt-[-8px]"
            onPress={() => {
              // Navigate to the actual dashboard
              store.setOnboardingDone(true);
            }}
          >
            <ButtonText>Skip ahead</ButtonText>
          </Button>
        </HStack>
        <Text bold size="3xl">
          Tell us more about You
        </Text>
        {/* insert the onboarding form here. */}
      </Box>
    </DashboardLayout>
  );
}
