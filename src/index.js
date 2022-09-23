import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
const App = () => <h1>Hello</h1>;

const rootString = renderToString(<App />);

const rootElement = document.getElementById("root");
rootElement.innerHTML = rootString;
const root = hydrateRoot(rootElement, <App />);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// createRoot.render(<App />, document.getElementById("root"));
