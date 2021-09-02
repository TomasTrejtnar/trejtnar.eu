import React from "react";
import { graphql } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../components/Layout";
import { IGatsbyImageData } from "gatsby-plugin-image";
import Project from "../components/Project";

interface ProjectsPageData {
  data: {
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
          body: string & React.ReactNode;
          slug: string;
        };
      }[];
    };
  };
}

const Projects: React.FC<ProjectsPageData> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="mc-top-wrapper">
        <h2 className="mc-name">{t("nav.projects")}</h2>
        <div className="mc-about">
          <h1>
            <Link to="/">Michal Ciesla</Link>
          </h1>
          <p>{t("projects.sub")}</p>
        </div>
      </div>
      <div className="mc-project-list">
        {data.projects.edges.map((p) => (
          <Project
            {...{ ...p.node.frontmatter, body: p.node.body, slug: p.node.slug }}
          />
        ))}
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
    projects: allMdx(
      filter: {
        slug: { glob: "projects/*.*" }
        frontmatter: { lang: { eq: $language } }
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
                  height: 128
                  width: 128
                  placeholder: BLURRED
                  transformOptions: { fit: CONTAIN }
                  backgroundColor: "transparent"
                  quality: 100
                )
              }
            }
            active
            tags
            link
          }
          body
          slug
        }
      }
    }
  }
`;
