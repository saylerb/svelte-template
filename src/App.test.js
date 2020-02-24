import { render } from "@testing-library/svelte";
import App from "./App.svelte";

test("app says hello", () => {
  const { getByText } = render(App, { name: "World" });

  expect(getByText("Hello World!")).toBeInTheDocument();
});
