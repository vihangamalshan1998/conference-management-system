import React from 'react';
import Signup from "../UserSignUpComponent";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header render with right text", () => {
    const { getByTestId } = render(<Signup />);
    const title = getByTestId("test_title");
    expect(title.textContent).toBe("International Conference Management System");
})
test("check initial password input field is empty", () => {
    const Component = render(<Signup />);
    const password = Component.getByTestId("password");
    expect(password.textContent).toBe("");
})
test("check initial Confirm password input field is empty", () => {
    const Component = render(<Signup />);
    const confirmpassword = Component.getByTestId("Confirmpassword");
    expect(confirmpassword.textContent).toBe("");
})
test("check initial register button check", () => {
    const Component = render(<Signup />);
    const signupbutton = Component.getByTestId("buttonsignup");
    expect(signupbutton.textContent).toBe("Sign Up");
})