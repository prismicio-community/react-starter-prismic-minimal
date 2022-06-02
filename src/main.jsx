import React from "react";
import ReactDOM from "react-dom/client";
import { PrismicProvider, PrismicToolbar } from "@prismicio/react";
import App from "./App";

import { createClient, repositoryName } from "../prismicio";

const client = createClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
      <PrismicToolbar repositoryName={repositoryName} />
    </PrismicProvider>
  </React.StrictMode>
);
