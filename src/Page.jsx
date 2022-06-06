import { useParams } from "react-router-dom";
import {
  usePrismicDocumentByUID,
  PrismicText,
  SliceZone,
} from "@prismicio/react";

import { components } from "../slices";

function Page({ uid: uidOverride }) {
  const params = useParams();
  const uid = uidOverride || params.uid;

  const [page, { state }] = usePrismicDocumentByUID("page", uid, {
    skip: !Boolean(uid),
  });

  switch (state) {
    case "loading": {
      return <div>Loading&hellip;</div>;
    }

    case "loaded": {
      return (
        <div>
          <h1>
            <PrismicText field={page.data.title} />
          </h1>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      );
    }
  }
}

export default Page;
