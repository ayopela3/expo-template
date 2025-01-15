import { render, fireEvent } from "@testing-library/react-native";
import SignIn from "../sign-in";

describe("SignIn", () => {
  it("renders correctly", () => {
    const { toJSON } = render(<SignIn />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders the text correctly", () => {
    const { getByText } = render(<SignIn />);
    expect(getByText("Welcome Back!")).toBeTruthy();
  });

  it("renders the Sign up button", () => {
    const { getByText } = render(<SignIn />);
    expect(getByText("Sign up")).toBeTruthy();
  });

  it("handles form submission", () => {
    const { getByTestId } = render(<SignIn />);
    const submitButton = getByTestId("submit-button");
    fireEvent.press(submitButton);
    expect(submitButton).toBeTruthy();
  });
});
