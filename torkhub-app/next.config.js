const withSass = require("@zeit/next-sass");
const isProd = process.env.NODE_ENV === "production";
const assetPrefix = isProd ? "https://example.com/" : "http://localhost:3000/";
const withTM = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ["swr"]
      }
    ],
    withSass
  ],
  {
    target: "serverless",
    assetPrefix: assetPrefix,
    env: {
      baseUrl: assetPrefix,
      weatherApi: "4c576501b79925d83a189d6b14149e4f",
      mapBoxApi: "pk.eyJ1IjoidG9ya2h1YiIsImEiOiJja2w2emx5Y2IxcjA3Mm9xanlodXBzdHdwIn0.M_TMo_-Wl-iwdqJQGG0YsQ"
    },
    onDemandEntries: {
      maxInactiveAge: 1000 * 60 * 60,
      pagesBufferLength: 5
    }
  }
);
