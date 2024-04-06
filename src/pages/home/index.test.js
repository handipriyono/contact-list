import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import PersonTable from "./index";

// Create a mock store
const store = configureStore({
  reducer: {
    person: () => [
      { firstname: "John", lastname: "Doe", age: 30 },
      { firstname: "Jane", lastname: "Doe", age: 25 },
    ],
  },
});

test("renders person data", async () => {
  render(
    <Provider store={store}>
      <PersonTable />
    </Provider>
  );

  // Wait for the component to finish fetching and rendering
  const johnElement = await screen.findByText("John");
  const janeElement = await screen.findByText("Jane");

  expect(johnElement).toBeInTheDocument();
  expect(janeElement).toBeInTheDocument();
});
