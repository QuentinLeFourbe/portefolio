import React from "react";
import { css } from "../../../styled-system/css/css";

type MainPanelProps = {
  children?: React.ReactNode;
};

function MainPanel({ children }: MainPanelProps) {
  return <div className={panel}>{children}</div>;
}

export default MainPanel;

const panel = css({
  gridArea: "main",
  padding: "0 1rem 0 2rem",
  borderLeft: "1.7px solid",
  borderLeftColor: "middleBorder",
  marginBottom: "1rem",
});
