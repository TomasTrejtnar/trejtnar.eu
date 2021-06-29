import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import "./nav.scss";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "gatsby-plugin-react-i18next";

const Languages = {
  cs: "Čeština",
  en: "English",
};

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useLayoutEffect(() => {
    const listener = (evt: Event) =>
      setScrolled((evt.currentTarget as Window).scrollY > 48);
    window.addEventListener("scroll", listener);
    window.addEventListener("load", listener);
    return () => {
      window.removeEventListener("scroll", listener);
      window.removeEventListener("load", listener);
    };
  }, [window, setScrolled]);
  const { t, i18n } = useTranslation();
  return (
    <nav className={"mc-nav" + (scrolled ? " mc-nav--scrolled" : "")}>
      <button
        className="mc-nav__item"
        onClick={() => window.scrollTo(0, 0)}
        title={t("nav.up")}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <a
        className="mc-nav__item"
        href="https://twitter.com/ciesla_michal"
        target="_blank"
        rel="noopener noreferrer"
        title={t("nav.github")}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        className="mc-nav__item"
        href="https://github.com/Akimayo"
        target="_blank"
        rel="noopener noreferrer"
        title={t("nav.twitter")}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <div className="mc-nav__languages">
        {Object.keys(Languages).map(
          (lang) =>
            i18n.language === lang || (
              <Link to="/" language={lang} key={lang}>
                {Languages[lang]}
              </Link>
            )
        )}
      </div>
    </nav>
  );
};
export default Nav;
