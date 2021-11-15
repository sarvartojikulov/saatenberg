/** @type {import('next').NextConfig} */




const nextTranslate = require("next-translate")
module.exports = {
  reactStrictMode: true,
  ...nextTranslate()
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({})