import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrismicProvider, PrismicToolbar } from "@prismicio/react";

import { createClient, linkResolver, repositoryName } from "../prismicio";

import App from "./App";
import Page from "./Page";
import Preview from "./Preview";

const client = createClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrismicProvider client={client} linkResolver={linkResolver}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Page uid="home" />} />
            <Route path="preview" element={<Preview />} />
            <Route path=":uid" element={<Page />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <PrismicToolbar repositoryName={repositoryName} />
    </PrismicProvider>
  </React.StrictMode>
);
