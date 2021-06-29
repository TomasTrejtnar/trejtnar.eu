import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { useTranslation } from "react-i18next";

import "./index-portfolio.scss";
import TimelineItem from "./TimelineItem";

interface IndexPortfolioProps {
  timeline: {
    [year: number]: {
      side: "life" | "work";
      title: string;
      body?: string & React.ReactNode;
    }[];
  };
  portfolio: string & React.ReactNode;
}
const IndexPortfolio: React.FC<IndexPortfolioProps> = ({
  timeline,
  portfolio,
}) => {
  const { t } = useTranslation();
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
                <span className="mc-lang">
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
        <h1 className="mc-name">
          <span>Michal</span>
          <span>Ciesla</span>
        </h1>
      </div>
      <div className="mc-arthery" />
      <div className="mc-portfolio-flex">
        <div className="mc-portfolio__body">
          <MDXRenderer>{portfolio}</MDXRenderer>
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
