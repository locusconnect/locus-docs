const nextra = require('nextra')

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en"
  }
}

module.exports = withNextra(nextConfig)
