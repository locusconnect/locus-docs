import { DocsThemeConfig } from "nextra-theme-docs";
import React from 'react'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Locus Documentation",
    };
  },
  
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' }
  ],
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Locus Documentation" />
      <meta
        property="og:description"
        content="Documentation for Locus Real Time Location System"
      />
      <meta
        property="og:image"
        content="https://docs.locusconnect.com/assets/photos/og.png"
      />
      <link type="image/svg+xml" rel="icon" sizes="any" href='https://docs.locusconnect.com/assets/photos/locus_icon.svg'/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Montserrat:wght@700;800&display=swap" rel="stylesheet" />
    </>
  ),
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.7792 0.0435435L21.7597 6.32895C21.8072 6.35604 21.8466 6.39522 21.8741 6.44251C21.9015 6.4898 21.9159 6.54352 21.9158 6.59818V10.4354C21.9159 10.4894 21.9018 10.5426 21.875 10.5895C21.8482 10.6364 21.8095 10.6755 21.7629 10.7028C21.7163 10.7303 21.6633 10.745 21.6092 10.7457C21.555 10.7463 21.5017 10.7328 21.4544 10.7065L14.6552 6.92217C14.5833 6.88209 14.4983 6.87221 14.4191 6.89472C14.3399 6.91722 14.2728 6.97026 14.2327 7.04218C14.2074 7.08824 14.194 7.1398 14.1934 7.19231V10.9469C14.1936 11.0009 14.2078 11.0538 14.2345 11.1007C14.2612 11.1475 14.2995 11.1867 14.3458 11.2143L21.6881 15.5595C21.7576 15.6007 21.8152 15.6593 21.8552 15.7296C21.8952 15.7998 21.9162 15.8793 21.9162 15.9601V17.831C21.916 17.9177 21.8917 18.0025 21.846 18.0761C21.8003 18.1496 21.735 18.2091 21.6575 18.2477L20.1995 18.9778C20.1289 19.0132 20.0503 19.03 19.9714 19.0266C19.8929 19.0233 19.8165 19.0004 19.7491 18.96L10.4607 13.3472C10.4149 13.3198 10.377 13.2809 10.3507 13.2344C10.3243 13.188 10.3105 13.1355 10.3106 13.0821V0.312773C10.3103 0.258048 10.3245 0.204224 10.3516 0.156711C10.3788 0.108956 10.4184 0.0693963 10.4662 0.0421732C10.5135 0.0145531 10.5674 0 10.6222 0C10.6771 0 10.7309 0.0145531 10.7783 0.0421732L10.7792 0.0435435Z" />
        <path d="M3.45906 4.78494L6.93625 6.73253C6.98395 6.75916 7.02365 6.79808 7.05124 6.84524C7.07966 6.89212 7.09539 6.94559 7.09687 7.00039L7.18312 15.7577C7.18353 15.838 7.20477 15.9167 7.24477 15.9863C7.28476 16.0559 7.34214 16.1139 7.41128 16.1547L15.8916 21.1286C15.9598 21.1689 16.0166 21.2259 16.0565 21.2942C16.0964 21.3626 16.1182 21.4401 16.1198 21.5192C16.1216 21.5986 16.1031 21.6771 16.066 21.7473C16.0289 21.8175 15.9746 21.8771 15.908 21.9203L13.234 23.6594C13.1628 23.7055 13.0805 23.7313 12.9958 23.7342C12.911 23.7371 12.8271 23.7169 12.753 23.6758L3.23866 18.366C3.16634 18.3256 3.10611 18.2666 3.06417 18.1951C3.02222 18.1237 3.00007 18.0423 3 17.9595V5.05554C3.00059 4.97426 3.03295 4.89643 3.09017 4.8387C3.14739 4.78097 3.22492 4.74791 3.30619 4.74661C3.35961 4.74595 3.41228 4.75916 3.45906 4.78494Z" />
      </svg>
      <strong style={{ marginLeft: ".4em", fontWeight: 600 }}>
        Locus RTLS Documentation
      </strong>
    </>
  ),

  primaryHue: 30,
  
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  chat: {
    link: "https://twitter.com/locusconnect",
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    ),
  },
  banner: {
    dismissible: true,
    key: "locus-docs-banner",
    text: (
      <span>
        🚧 Locus Documentation is currently in beta.{" "}
        <a href="https://twitter.com/locusconnect" target="_blank">
          Follow us on Twitter
        </a>{" "}
        for updates.
      </span>
    ),
  },
  footer: {
    text: (
      <span>
        Locus Documentation {new Date().getFullYear()} ©{" "}
        <a href="https://locusconnect.com" target="_blank">
          Locus Connect
        </a>
        .
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    float: true,
  },
};

export default config;
