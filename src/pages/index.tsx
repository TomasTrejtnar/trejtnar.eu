import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import IndexPortfolio from "../components/IndexPortfolio";
import "../scss/main.scss";
import { IGatsbyImageData } from "gatsby-plugin-image";

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
    projects: {
      edges: {
        node: {
          frontmatter: {
            wip: boolean;
            year: number;
            title: string;
            logo: {
              childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
              };
            };
            active: boolean;
            tags: string[];
          };
          excerpt: string;
          body: string & React.ReactNode;
          slug: string;
        };
      }[];
    };
  };
}
const IndexPage: React.FC<IndexPageData> = ({ data }) => {
  const currentProject = data.projects.edges
      .filter(({ node }) => node.frontmatter.wip)
      .shift(),
    featuredProject = data.projects.edges
      .filter(({ node }) => !node.frontmatter.wip)
      .shift();
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
        currentProject={
          currentProject && {
            ...currentProject.node.frontmatter,
            excerpt: currentProject.node.excerpt,
            slug: currentProject.node.slug,
          }
        }
        featuredProject={
          featuredProject && {
            ...featuredProject.node.frontmatter,
            excerpt: featuredProject.node.excerpt,
            slug: featuredProject.node.slug,
          }
        }
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
      filter: {
        slug: { glob: "timeline/*.*" }
        frontmatter: { lang: { eq: $language } }
      }
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
    portfolio: mdx(
      frontmatter: { lang: { eq: $language } }
      fileAbsolutePath: { glob: "**/data/portfolio.*.mdx" }
    ) {
      body
    }
    projects: allMdx(
      filter: {
        slug: { glob: "projects/*.*" }
        frontmatter: { lang: { eq: $language }, active: { eq: true } }
      }
      sort: { fields: frontmatter___year, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            wip
            year
            title
            logo {
              childImageSharp {
                gatsbyImageData(
                  height: 64
                  width: 64
                  placeholder: BLURRED
                  transformOptions: { fit: CONTAIN }
                  backgroundColor: "transparent"
                  quality: 100
                )
              }
            }
            active
            tags
          }
          excerpt(pruneLength: 200)
          slug
        }
      }
    }
  }
`;
