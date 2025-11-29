import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img
        style={{ width: "80px" }}
        src="/proAr.png"
        alt=""
      />
    </>
  ),
  project: {
    link: "https://github.com/nhahub/NHA-115",
  },
  
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
