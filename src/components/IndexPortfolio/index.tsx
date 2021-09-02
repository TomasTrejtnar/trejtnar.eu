import React, { useState } from "react";
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

import Project, { ProjectProps } from "../Project";
import TimelineItem from "./TimelineItem";
import "./index-portfolio.scss";

interface IndexPortfolioProps {
  timeline: {
    [year: number]: {
      side: "life" | "work";
      title: string;
      body?: string & React.ReactNode;
    }[];
  };
  portfolio: string & React.ReactNode;
  currentProject?: ProjectProps;
  featuredProject?: ProjectProps;
}
const IndexPortfolio: React.FC<IndexPortfolioProps> = ({
  timeline,
  portfolio,
  currentProject,
  featuredProject,
}) => {
  const { t } = useTranslation();
  const [more, setMore] = useState(false);
  return (
    <>
      <div className="mc-top-wrapper">
        <div className="mc-about">
          <p>{t("title.about.text")}</p>
          <p>
            <FontAwesomeIcon icon={faGlobe} />
            {["cs", "en"].map((lang, i) => (
              <React.Fragment key={i}>
                {i > 0 && ", "}
                <span className="mc-lang" key={i}>
                  {t(`title.about.languages.${lang}.name`)}
                  <span
                    className="mc-lang__level"
                    dangerouslySetInnerHTML={{
                      __html: t(`title.about.languages.${lang}.level`),
                    }}
                  />
                </span>
              </React.Fragment>
            ))}
          </p>
          <p>
            <FontAwesomeIcon icon={faCode} />
            {["net", "react", "php", "java"].map((lang, i) => (
              <React.Fragment key={i}>
                {i > 0 && ", "}
                <span className="mc-lang">
                  {t(`title.about.frameworks.${lang}.name`)}
                  <span
                    className="mc-lang__level"
                    dangerouslySetInnerHTML={{
                      __html: t(`title.about.frameworks.${lang}.level`),
                    }}
                  />
                </span>
              </React.Fragment>
            ))}
            {" " + t("title.about.frameworks.etc")}
          </p>
        </div>
        <div className="mc-name--grid">
          <h1 className="mc-name">
            <span>Michal</span>
            <span>Ciesla</span>
          </h1>
          <div className="mc-name mc-name--artery-break">
            <span>Michal</span>
            <span>Ciesla</span>
          </div>
        </div>
      </div>
      <div className="mc-artery" />
      <div className="mc-portfolio-flex">
        <div className="mc-portfolio__body">
          <div className="mc-portfolio__body-projects">
            <h2>
              <Link to="/projects">{t("nav.projects")}</Link>
            </h2>
            {currentProject && (
              <>
                <h3 className="mc-portfolio__body-title">
                  {t("body.projects.current.title")}
                </h3>
                <p>{t("body.projects.current.p")}</p>
                <Project {...currentProject} preview />
              </>
            )}
            {featuredProject && (
              <>
                <h3 className="mc-portfolio__body-title">
                  {t("body.projects.featured.title")}
                </h3>
                <p>{t("body.projects.featured.p")}</p>
                <Project {...featuredProject} preview />
              </>
            )}
          </div>
          <h2 className="mc-portfolio__body-title">{t("body.about")}</h2>
          <div
            className={
              "mc-portfolio__body-about" +
              (more ? " mc-portfolio__body-about-more" : "")
            }
          >
            <MDXRenderer>{portfolio}</MDXRenderer>
          </div>
          {more || (
            <button onClick={() => setMore(true)}>{t("body.readMore")}</button>
          )}
        </div>
        <div className="mc-portfolio__timeline">
          {Object.keys(timeline).map((y) => {
            const year = parseInt(y);
            return timeline[year].map((item) => (
              <TimelineItem side={item.side} year={year} title={item.title}>
                {item.body && <MDXRenderer>{item.body}</MDXRenderer>}
              </TimelineItem>
            ));
          })}
        </div>
      </div>
    </>
  );
};
export default IndexPortfolio;
