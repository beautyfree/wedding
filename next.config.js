/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withLinaria = require("next-linaria");
const optimizedImages = require("next-optimized-images");

const isProd = process.env.NODE_ENV === "production";

module.exports = withPlugins([
  [
    withLinaria,
    {
      linaria: {
        cacheDirectory: "./.next/cache/linaria",
        sourceMap: isProd,
      },
    },
  ],
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true,
      },
      // imagesPublicPath: "/wedding/_next/static/images/",
    },
  ],
  {
    reactStrictMode: true,
    // basePath: isProd ? "/wedding" : "",
    // assetPrefix: isProd ? "/wedding/" : "",
    // publicRuntimeConfig: {
    //   basePath: isProd ? "/wedding/" : "",
    // },
  },
]);
