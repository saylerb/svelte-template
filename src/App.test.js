const testing = require("@testing-library/svelte");
const { render } = testing;
const App = require("./App.svelte");

test("app says hello", () => {
  const { getByText } = render(App, { name: "World" });

  expect(getByText("Hello World!")).toBeInTheDocument();
});
