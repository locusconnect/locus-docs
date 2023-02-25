import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Locus Documentation</span>,
  project: {
    link: "https://github.com/locusconnect",
  },
  docsRepositoryBase: "https://github.com/locusconnect/locus-docs",
  footer: {
    text: "Locus Documentation",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh", text: "中文" },
  ],
  sidebar: {
    defaultMenuCollapseLevel:"0",
  },
  toc: {
    float:true,
  },
};

export default config;
