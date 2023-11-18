import React from "react";
import { css } from "../../../../styled-system/css";

type DatedItemProps = {
  startDate: string;
  endDate: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

function DatedItem({
  startDate,
  endDate,
  title,
  subtitle,
  children,
}: DatedItemProps) {
  return (
    <div className={flexRow}>
      <div className={flexColumn}>
        <p className={noWrap}>{startDate}</p>
        <p className={noWrap}>{endDate}</p>
      </div>
      <div className={flexColumn}>
        <h4>{title}</h4>
        {subtitle && <h5>{subtitle}</h5>}
        {children}
      </div>
    </div>
  );
}

export default DatedItem;

const flexColumn = css({
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
});

const flexRow = css({
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
  margin: "1rem 0 1rem 0",
});

const noWrap = css({
  whiteSpace: "nowrap",
});
