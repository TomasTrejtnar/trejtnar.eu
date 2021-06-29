import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const NotFoundPage = () => {
  return (
    <Layout>
      <Link to="/">
        Zpět na portfolio
      </Link>
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