import { graphql } from "gatsby";
import { Link } from "gatsby-plugin-react-i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="mc-top-wrapper">
        <h2 className="mc-name">{t("nav.projects")}</h2>
        <div className="mc-about">
          <h1>
            <Link to="/">
              Michal Ciesla
            </Link>
          </h1>
          <p>Aplikace | Webové stránky | Pidi-služby | Ztráty času</p>
        </div>
      </div>
    </Layout>
  );
};
export default Projects;
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
