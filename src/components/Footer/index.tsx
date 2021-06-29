import { Link } from "gatsby-plugin-react-i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.scss";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="mc-footer">
      <p>
        &copy; {new Date().getFullYear()} Michal Ciesla
        <span className="mc-footer__low">. {t("footer.rights")}</span>
      </p>
      <p>
        <Link to="/">{t("nav.portfolio")}</Link>|
        <Link to="/projects">{t("nav.projects")}</Link>
      </p>
    </footer>
  );
};
export default Footer;
