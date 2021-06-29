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
        name: "projects",
        path: "./src/data/projects/",
      },
      __key: "projects",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "timeline",
        path: "./src/data/timeline/",
      },
      __key: "timeline",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "portfolio",
        path: "./src/data/",
      },
      __key: "portfolio",
    },
  ],
};
