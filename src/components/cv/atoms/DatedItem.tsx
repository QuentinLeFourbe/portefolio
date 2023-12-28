import React from "react";
import { css, cx } from "../../../../styled-system/css";

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
      <div className={cx(flexColumn, date)}>
        <p className={noWrap}>{startDate}</p>
        <p className={noWrap}>{endDate}</p>
      </div>
      <div className={cx(flexColumn, jobContent)}>
        <h4>{title}</h4>
        {subtitle && <h5>{subtitle}</h5>}
        {children}
      </div>
    </div>
  );
}

export default DatedItem;

const date = css({
  // width: "100px",
});

const jobContent = css({
  width: "410px",
});

const flexColumn = css({
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
});

const flexRow = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: "1rem 0 1rem 0",
});

const noWrap = css({
  whiteSpace: "nowrap",
});
