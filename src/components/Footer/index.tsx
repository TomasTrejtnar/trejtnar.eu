import React from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

import "./footer.scss";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const mail = i18n.language === "cs" ? "ahoj" : "hello";
  return (
    <footer className="mc-footer">
      <p>
        &copy; {new Date().getFullYear()} Michal Ciesla
        <span className="mc-footer__low">. {t("footer.rights")}</span>
      </p>
      <p>
        <Link to="/">{t("nav.portfolio")}</Link>|
        <Link to="/projects">{t("nav.projects")}</Link>|
        <a href={`mailto:${mail}@mciesla.cz`}>{mail}@mciesla.cz</a>
      </p>
    </footer>
  );
};
export default Footer;
