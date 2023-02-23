import React from "react";
import Layout from "@theme/Layout";
import "@stoplight/elements/styles.min.css";
import { API } from "@stoplight/elements";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function Api() {
  return (
    <Layout title="emnify API Reference">
      <BrowserOnly>
        {() => (
          <API apiDescriptionUrl="openapi/enterprise.yaml" router="hash" />
        )}
      </BrowserOnly>
    </Layout>
  );
}
