import {
  usePrismicDocumentByUID,
  PrismicText,
  SliceZone,
} from "@prismicio/react";

import { components } from "../slices";

function App() {
  const [page, { state }] = usePrismicDocumentByUID("page", "home");

  if (state !== "loaded") {
    return <div>Loading&hellip;</div>;
  }

  return (
    <div>
      <h1>
        <PrismicText field={page.data.title} />
      </h1>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export default App;
