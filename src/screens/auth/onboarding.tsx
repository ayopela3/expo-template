import { Box } from "@/src/components/ui/box";
import { Button, ButtonText } from "@/src/components/ui/button";
import { Text } from "@/src/components/ui/text";
import { useBoundStore } from "@/src/store";

export default function Onboarding() {
  const store = useBoundStore();
  return (
    <Box>
      <Text>Onboarding</Text>
      <Text>Skip this step</Text>
      <Button
        onPress={() => {
          // Navigate to the actual dashboard
          store.setOnboardingDone(true);
        }}
      >
        <ButtonText>Skip</ButtonText>
      </Button>
    </Box>
  );
}
