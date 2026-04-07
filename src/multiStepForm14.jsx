import React, { useReducer } from "react";


const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  errors: {}
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: "" }
      };

    case "NEXT":
      const errors = validate(state);
      if (Object.keys(errors).length > 0) {
        return { ...state, errors };
      }
      return { ...state, step: state.step + 1 };

    case "BACK":
      return { ...state, step: state.step - 1 };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function validate(state) {
  const errors = {};

  if (state.step === 1) {
    if (!state.firstName) errors.firstName = "First name required";
    if (!state.lastName) errors.lastName = "Last name required";
  }

  if (state.step === 2) {
    if (!state.email.includes("@")) errors.email = "Invalid email";
    if (!/^\d+$/.test(state.contact)) errors.contact = "Contact must be numbers";
  }

  return errors;
}

export default function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Multi Step Form</h2>

      {state.step === 1 && (
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={state.firstName}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          {state.errors.firstName && (
            <p className="text-red-500">{state.errors.firstName}</p>
          )}

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={state.lastName}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          {state.errors.lastName && (
            <p className="text-red-500">{state.errors.lastName}</p>
          )}
        </div>
      )}

      {state.step === 2 && (
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          {state.errors.email && (
            <p className="text-red-500">{state.errors.email}</p>
          )}

          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={state.contact}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          {state.errors.contact && (
            <p className="text-red-500">{state.errors.contact}</p>
          )}
        </div>
      )}

      {state.step === 3 && (
        <div>
          <h3 className="font-semibold">Result</h3>
          <p>First Name: {state.firstName}</p>
          <p>Last Name: {state.lastName}</p>
          <p>Email: {state.email}</p>
          <p>Contact: {state.contact}</p>

          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>
      )}

      <div className="flex justify-between mt-4">
        {state.step > 1 && (
          <button
            onClick={() => dispatch({ type: "BACK" })}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Back
          </button>
        )}

        {state.step < 3 && (
          <button
            onClick={() => dispatch({ type: "NEXT" })}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

