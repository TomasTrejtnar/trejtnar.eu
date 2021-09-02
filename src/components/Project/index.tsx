import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import React, { useLayoutEffect, useRef } from "react";

import "./project.scss";

export interface ProjectProps {
  year: number;
  title: string;
  logo: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
  wip?: boolean;
  active?: boolean;
  tags?: string[];
  excerpt?: string;
  body?: string & React.ReactNode;
  slug: string;
  preview?: boolean;
  link?: string;
}
const Project: React.FC<ProjectProps> = ({
  title,
  excerpt,
  body,
  slug,
  preview,
  logo,
  tags,
  year,
  active,
  wip,
  link,
}) => {
  const { t } = useTranslation();
  const slugName = /\/(.*)\.\w+$/.exec(slug)[1];
  const { hash } = window.location;
  const anchor = useRef<HTMLDivElement>();
  useLayoutEffect(() => {
    !preview &&
      hash === `#${slugName}` &&
      window.scrollTo(0, anchor.current.offsetTop - 80);
  }, [hash, slugName, anchor, preview]);
  return (
    <div
      className={
        "mc-project " + (preview ? "mc-project--preview" : "mc-project--full")
      }
    >
      <div className="mc-project__logo-wrapper" ref={anchor}>
        <GatsbyImage
          id={preview ? undefined : slugName}
          className="mc-project__logo"
          image={logo.childImageSharp.gatsbyImageData}
          alt={title}
        />
      </div>
      <div className="mc-project__title">
        {preview || (
          <a href={"#" + slugName} className="nofx mc-project__title-anchor">
            <FontAwesomeIcon icon={faLink} />
          </a>
        )}
        <h3 className="mc-project__title-name">{title}</h3>
        {preview && (
          <Link to={"/projects#" + slugName}>
            {t("body.projects.viewMore")}
          </Link>
        )}
      </div>
      {preview || (
        <div className="mc-project__tags">
          {tags.map((t, i) => (
            <span className="mc-project__tags-tag" key={i}>
              {t}
            </span>
          ))}
        </div>
      )}
      <div className="mc-project__body">
        {preview
          ? excerpt && <p>{excerpt}</p>
          : body && <MDXRenderer>{body}</MDXRenderer>}
      </div>
      {preview || (
        <div className="mc-project__info">
          <span>{t("projects.year", { year })}</span>
          <span>
            {t("projects.status.", {
              status: t(
                `projects.status.${
                  active
                    ? wip
                      ? "wip"
                      : "active"
                    : wip
                    ? "abandoned"
                    : "retired"
                }`
              ),
            })}
          </span>
          <span>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {/^http(s)?:\/\/(.*)/.exec(link)[2]}
              </a>
            )}
          </span>
        </div>
      )}
    </div>
  );
};
export default Project;
