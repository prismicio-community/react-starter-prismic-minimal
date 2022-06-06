import { usePrismicPreviewResolver } from "@prismicio/react";

import { useNavigate } from "react-router-dom";

function Preview() {
  const navigate = useNavigate();

  usePrismicPreviewResolver({ navigate });

  return <div>Loading&hellip;</div>;
}

export default Preview;
