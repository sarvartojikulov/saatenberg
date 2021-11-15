/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextTranslate = require("next-translate")
module.exports = {
  reactStrictMode: true,
  ...nextTranslate(),
  ...withBundleAnalyzer({})
}