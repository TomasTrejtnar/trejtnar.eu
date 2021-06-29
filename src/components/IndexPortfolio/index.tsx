import React from "react";

import "./index-portfolio.scss";
import TimelineItem from "./TimelineItem";

const IndexPortfolio: React.FC = () => {
  return (
    <>
      <div className="mc-top-wrapper">
        <p className="mc-about">
          Student <i className="emoji">👨🏼‍🎓</i> | Programmer{" "}
          <i className="emoji">👨🏼‍💻</i> | Computer person{" "}
          <i className="emoji">🖥</i> | Science, space &amp; technology
          enthusiast <i className="emoji">🚀</i> | Used-to-be dancer{" "}
          <i className="emoji">🕺🏼</i>
        </p>
        <h1 className="mc-name">
          <span>Michal</span>
          <span>Ciesla</span>
        </h1>
      </div>
      <div className="mc-arthery" />
      <div className="mc-portfolio-flex">
        <div className="mc-portfolio__body">Hello</div>
        <div className="mc-portfolio__timeline">
          <TimelineItem side="life" year={1999} title="Born" />
          <TimelineItem side="life" year={2006} title="Primary School" />
          <TimelineItem side="life" year={2010} title="Started dancing" />
          <TimelineItem
            side="life"
            year={2011}
            title="Found out about Minecraft"
          />
          <TimelineItem side="work" year={2013} title="First playing with Java">
            Because Minecraft Mods seemed cool
          </TimelineItem>
          <TimelineItem
            side="life"
            year={2014}
            title="Secondary Technical School"
          />
          <TimelineItem
            side="work"
            year={2015}
            title="First professional experience"
          >
            <ul>
              <li>Unpaid Internship</li>
              <li>
                Joined <strong>Microsoft STC</strong>
              </li>
              <li>First complex public web application</li>
            </ul>
          </TimelineItem>
          <TimelineItem side="work" year={2016} title="First part time job" />
          <TimelineItem side="life" year={2018} title="College" />
          <TimelineItem
            side="work"
            year={2020}
            title="First commisioned application"
          />
          <TimelineItem
            side="work"
            year={2021}
            title="First Developer part-time job"
          />
          <TimelineItem side="life" year={2021} title="Bachelor's degree">
            System Engineering
          </TimelineItem>
        </div>
      </div>
    </>
  );
};
export default IndexPortfolio;
