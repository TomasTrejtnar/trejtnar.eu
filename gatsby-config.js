module.exports = {
  siteMetadata: {
    title: "Tomáš Trejtnar",
    siteUrl: "https://mciesla.cz/"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "locale",
        path: `./src/data/locales`,
      },
      __key: "locale",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data/",
      },
      __key: "data",
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages: ["cs", "en"],
        defaultLanguage: "cs",
        siteUrl: "https://mciesla.cz/",
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: ".",
          debug: true,
        },
      },
    },
  ],
};
