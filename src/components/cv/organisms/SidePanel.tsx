import React from "react";
import { css } from "../../../../styled-system/css/css";

type SidePanelProps = {
  children?: React.ReactNode;
};

function SidePanel({ children }: SidePanelProps) {
  return <div className={panel}>{children}</div>;
}

export default SidePanel;

const panel = css({
  gridArea: "side",
  padding: "5rem 2rem 1rem 2rem",
});
