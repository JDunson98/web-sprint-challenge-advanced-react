import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    fireEvent.change(firstNameInput, {
        target: {
            value: "First"
        },
    });
    fireEvent.change(lastNameInput, {
        target: {
            value: "Last"
        },
    }),
    fireEvent.change(addressInput, {
        target: {
            value: "123 Test Street"
        },
    }),
    fireEvent.change(cityInput, {
        target: {
            value: "Test"
        },
    }),
    fireEvent.change(stateInput, {
        target: {
            value: "Test"
        },
    }),
    fireEvent.change(zipInput, {
        target: {
            value: "11111"
        },
    });

    expect(firstNameInput.value).toBe("First");
    expect(lastNameInput.value).toBe("Last");
    expect(addressInput.value).toBe("123 Test Street");
    expect(cityInput.value).toBe("Test");
    expect(stateInput.value).toBe("Test");
    expect(zipInput.value).toBe("11111");

    const submit = screen.getByText("Checkout");
    fireEvent.click(submit)
});
