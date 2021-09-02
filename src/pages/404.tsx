import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby-plugin-react-i18next";

import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

import "../components/IndexPortfolio/index-portfolio.scss";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="mc-top-wrapper">
        <h1>Michal Ciesla</h1>
        <h2 className=".mc-name">{t("404.notFound")}</h2>
      </div>
      <Link to="/">{t("404.back")}</Link>
      <div>
        {t("404.old")}
        <a
          href={`https://old.mciesla.cz${
            typeof window === "undefined" ? "/" : window.location.pathname
          }`}
        >
          old.mciesla.cz
        </a>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
