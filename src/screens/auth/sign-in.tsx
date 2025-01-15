import SocialFields from "@/src/components/forms/social-fields";
import SignInForm from "@/src/components/forms/sign-in";
import { Box } from "@/src/components/ui/box";
import { Text } from "@/src/components/ui/text";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Divider from "@/src/components/divider";
import { Button, ButtonText } from "@/src/components/ui/button";
import { HStack } from "@/src/components/ui/hstack";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Box className="pt-16 mt-24 p-4">
      <Text className="mt-8 mb-8" size="3xl" bold>
        Welcome Back!
      </Text>
      <SignInForm
        email={email}
        password={password}
        setEmailValue={setEmail}
        setPasswordValue={setPassword}
        handleSubmit={(payload) => {
          console.log("wow", payload);
        }}
      />
      <Divider text="or" />
      <SocialFields />
      <StatusBar style="auto" />
      <Divider withText={false} />
      <HStack className="justify-center items-center">
        <Text>Don't you have an account? </Text>
        <Button variant="link" size="sm">
          <ButtonText className="text-blue-500">Sign up</ButtonText>
        </Button>
      </HStack>
    </Box>
  );
}
