import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Locus Docs</span>,
  project: {
    link: "https://github.com/locusconnect",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/locusconnect/locus-docs",
  footer: {
    text: "Locus Documentation",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh", text: "中文" },
  ],
};

export default config;
