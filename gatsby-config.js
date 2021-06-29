module.exports = {
  siteMetadata: {
    title: "Michal Ciesla",
  },
  plugins: [
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
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: `locale`,
        languages: [`cs`, `en`],
        defaultLanguage: `cs`,
        siteUrl: `https://mciesla.cz/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
        },
      },
    },
    "gatsby-transformer-sharp",
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
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "locale",
        path: "./src/locales",
      },
      __key: "locale",
    },
  ],
};
