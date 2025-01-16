import { FC, useState } from "react";
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
import { KeyboardAvoidingView } from "react-native";

interface SignUpFormProps {
  email: string;
  setEmailValue: (email: string) => void;
  setPasswordValue: (password: string) => void;
  password: string;
  fullName: string;
  setFullNameValue: (fullName: string) => void;
  handleSubmit: (payload: { email: string; password: string }) => void;
  size?: "sm" | "md" | "lg";
}

const SignUpForm: FC<SignUpFormProps> = ({
  size = "lg",
  email,
  password,
  fullName,
  setFullNameValue,
  setEmailValue,
  setPasswordValue,
  handleSubmit,
}) => {
  const errorMsg =
    "Must be a at least 6 characters long, contains at least one, uppercase letter with at least one special character.";
  const [retypedPassword, setRetypedPassword] = useState<string>("");

  const emailValidator = (email: string) => {
    return new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email);
  };

  const validatePassword = (password: string) => {
    return new RegExp(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/
    ).test(password);
  };

  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={70}>
      <VStack testID="sign-up-form">
        <FormControl isRequired isInvalid={emailValidator(email)} size="md">
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
        <FormControl isRequired className="mt-4" size="md">
          <FormControlLabel>
            <FormControlLabelText>Full Name</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1" size={size}>
            <InputField
              type="text"
              value={fullName}
              onChangeText={(text) => {
                setFullNameValue(text);
              }}
            />
          </Input>
        </FormControl>
        <FormControl
          isRequired
          className="mt-4"
          isInvalid={emailValidator(email)}
          size="md"
        >
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
            <FormControlErrorText>{errorMsg}</FormControlErrorText>
          </FormControlError>
        </FormControl>
        <FormControl
          isRequired
          className="mt-4"
          isInvalid={retypedPassword !== password}
          size="md"
        >
          <FormControlLabel>
            <FormControlLabelText>Re-enter your Password</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1" size={size}>
            <InputField
              type="password"
              value={retypedPassword}
              onChangeText={(text) => {
                validatePassword(text) && setRetypedPassword(text);
              }}
            />
          </Input>
          <FormControlError>
            <FormControlErrorText>{errorMsg}</FormControlErrorText>
          </FormControlError>
        </FormControl>
        <HStack className="justify-between">
          <Button
            className="mt-4 w-full rounded-[8px]"
            size={size}
            testID="submit-button"
            onPress={() => handleSubmit({ email, password })}
          >
            <ButtonText>Sign up</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </KeyboardAvoidingView>
  );
};

export default SignUpForm;
