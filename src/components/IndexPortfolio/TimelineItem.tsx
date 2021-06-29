import React from "react";

interface TimelineItemProps {
  side: "work" | "life";
  year: number;
  title: React.ReactNode;
}
const TimelineItem: React.FC<React.PropsWithChildren<TimelineItemProps>> = ({
  side,
  year,
  title,
  children,
}) => {
  return (
    <div className={`mc-timeline mc-timeline--${side}`}>
      <div className="mc-timeline__year">{year}</div>
      <div className="mc-timeline__body">
        <div className="mc-timeline__title">{title}</div>
        {children}
      </div>
    </div>
  );
};
export default TimelineItem;
