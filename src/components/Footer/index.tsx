import React from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

import "./footer.scss";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="mc-footer">
      <p>
        &copy; {new Date().getFullYear()} Tomáš Trejtnar
        <span className="mc-footer__low">. {t("footer.rights")}</span>
      </p>
      <p>
        <Link to="/">{t("nav.portfolio")}</Link>|
        <Link to="/projects">{t("nav.projects")}</Link>|
        <a href={`mailto:tomas@trejtnar.eu`}>tomas@trejtnar.eu</a>
      </p>
    </footer>
  );
};
export default Footer;
