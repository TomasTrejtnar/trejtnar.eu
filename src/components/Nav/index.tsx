import "./nav.scss";

import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";
import {
  faGithub,
  faMastodon,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Country from "flagit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useLayoutEffect } from "react";

const Languages: { code: string; name: string; country: string }[] = [
  {
    code: "cs",
    name: "Čeština",
    country: "CZ",
  },
  {
    code: "en",
    name: "English",
    country: "US",
  },
  // {
  //   code: "jp",
  //   name: "日本語",
  //   country: "JP",
  // },
];

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const listener = (evt: Event) =>
        setScrolled((evt.currentTarget as Window).scrollY > 48);
      window.addEventListener("scroll", listener);
      window.addEventListener("load", listener);
      return () => {
        window.removeEventListener("scroll", listener);
        window.removeEventListener("load", listener);
      };
    }
  }, [setScrolled]);
  const { t, i18n } = useTranslation();
  return (
    <nav className={"mc-nav" + (scrolled ? " mc-nav--scrolled" : "")}>
      <button
        className="mc-nav__item"
        onClick={() => typeof window !== "undefined" && window.scrollTo(0, 0)}
        title={t("nav.up")}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <a
        className="mc-nav__item"
        href="https://twitter.com/TTrejtnar"
        target="_blank"
        rel="noopener noreferrer"
        title={t("nav.twitter")}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://mstdn.social/@trejtnar"
        className="mc-nav__item"
        rel="me"
        target="_blank"
        title={t("nav.mastodon")}
      >
        <FontAwesomeIcon icon={faMastodon} />
      </a>
      <a
        className="mc-nav__item"
        href="https://github.com/TomasTrejtnar"
        target="_blank"
        rel="noopener noreferrer"
        title={t("nav.github")}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <div className="mc-nav__languages">
        {Languages.map(
          ({ code, name, country }) =>
            i18n.language === code || (
              <Link to="/" language={code} title={name} key={code}>
                <Country countryShort={country} size={24} alt={name} />
              </Link>
            )
        )}
      </div>
    </nav>
  );
};
export default Nav;
