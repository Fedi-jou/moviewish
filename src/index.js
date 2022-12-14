import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from "react";
// import { StrictMode } from "react";
// import { hydrateRoot } from "react-dom/client";
// import { renderToString } from "react-dom/server";
// import App from "./App";
// const rootString = renderToString(<App />);

// const rootElement = document.getElementById("root");
// rootElement.innerHTML = rootString;
// const root = hydrateRoot(rootElement, <App />);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// createRoot.render(<App />, document.getElementById("root"));
