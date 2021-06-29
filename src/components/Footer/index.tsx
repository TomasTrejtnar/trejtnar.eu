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
      <a
        href="http://gatsbyjs.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mc-footer__low mc-footer--credit"
        title="Gatsby.js"
      >
        {t("footer.using")}
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z"
            fill="currentColor"
          />
        </svg>
      </a>
    </footer>
  );
};
export default Footer;
