import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import "./nav.scss";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useLayoutEffect } from "react";

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
  return (
    <nav className={"mc-nav" + (scrolled ? " mc-nav--scrolled" : "")}>
      <button className="mc-nav__item" onClick={() => window.scrollTo(0, 0)}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <a
        className="mc-nav__item"
        href="https://twitter.com/ciesla_michal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        className="mc-nav__item"
        href="https://github.com/Akimayo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </nav>
  );
};
export default Nav;
