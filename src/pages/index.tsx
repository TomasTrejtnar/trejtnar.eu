import React from "react";
import Layout from "../components/Layout";
import IndexPortfolio from "../components/IndexPortfolio";

import "../scss/main.scss";
import { graphql } from "gatsby";

interface IndexPageData {
  data: {
    timeline: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            year: number;
            side: "life" | "work";
          };
          body: React.ReactNode;
        };
      }[];
    };
    portfolio: {
      body: string & React.ReactNode;
    };
  };
}
const IndexPage: React.FC<IndexPageData> = ({ data }) => {
  return (
    <Layout>
      <IndexPortfolio
        timeline={data.timeline.edges.reduce((set, item) => {
          let modifiedYearSet = [];
          if (Object.keys(set).includes(item.node.frontmatter.year.toString()))
            modifiedYearSet = [...set[item.node.frontmatter.year]];
          modifiedYearSet.push({
            title: item.node.frontmatter.title,
            side: item.node.frontmatter.side,
            body: item.node.body,
          });
          return { ...set, [item.node.frontmatter.year]: modifiedYearSet };
        }, {})}
        portfolio={data.portfolio.body}
      />
    </Layout>
  );
};

export default IndexPage;
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
    timeline: allMdx(
      filter: { frontmatter: { lang: { eq: $language } }, slug: {regex: "/^\\d{4}-.+\\.[a-z]{2}/"} }
      sort: { fields: frontmatter___year }
    ) {
      edges {
        node {
          frontmatter {
            title
            year
            side
          }
          body
        }
      }
    }
    portfolio: mdx(frontmatter: {lang: {eq: $language}, title: {eq: "portfolio"}}) {
      body
    }
  }
`;
