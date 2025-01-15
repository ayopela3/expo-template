import { FC } from "react";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "../ui/form-control";
import { VStack } from "../ui/vstack";
import { Text } from "../ui/text";
import { Input, InputField } from "../ui/input";
import { Button, ButtonText } from "../ui/button";
import { HStack } from "../ui/hstack";

interface SignInFormProps {
  email: string;
  setEmailValue: (email: string) => void;
  setPasswordValue: (password: string) => void;
  password: string;
  handleSubmit: (payload: { email: string; password: string }) => void;
  size?: "sm" | "md" | "lg";
}

const SignInForm: FC<SignInFormProps> = ({
  size = "lg",
  email,
  password,
  setEmailValue,
  setPasswordValue,
  handleSubmit,
}) => {
  const emailValidator = (email: string) => {
    return new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email);
  };

  const validatePassword = (password: string) => {
    return new RegExp(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/
    ).test(password);
  };

  return (
    <VStack testID="sign-in-form">
      <FormControl isInvalid={emailValidator(email)} size="md">
        <FormControlLabel>
          <FormControlLabelText>Email Address</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size={size}>
          <InputField
            type="text"
            value={email}
            onChangeText={(text) => setEmailValue(text)}
          />
        </Input>
        <FormControlError>
          <FormControlErrorText>Must be a valid email.</FormControlErrorText>
        </FormControlError>
      </FormControl>

      <FormControl className="mt-4" isInvalid={emailValidator(email)} size="md">
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size={size}>
          <InputField
            type="password"
            value={password}
            onChangeText={(text) => {
              validatePassword(text) && setPasswordValue(text);
            }}
          />
        </Input>
        <FormControlError>
          <FormControlErrorText>
            Must be a at least 6 characters long, contains at least one
            Uppercase letter with at least one special character.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <HStack className="justify-between">
        <Button variant="link" className="mt-4">
          <Text underline>Forgot Password?</Text>
        </Button>
        <Button
          className="mt-4 rounded-[8px]"
          size={size}
          testID="submit-button"
          onPress={() => handleSubmit({ email, password })}
        >
          <ButtonText>Sign in</ButtonText>
        </Button>
      </HStack>
    </VStack>
  );
};

export default SignInForm;
