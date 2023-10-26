import React from "react";
import { css } from "../../../styled-system/css";
import Icon from "./Icon";
import { IconName } from "../../types/Icon";

type IconItemProps = {
  icon: IconName;
  title: string;
  children?: React.ReactNode;
};

function IconItem({ icon, title, children }: IconItemProps) {
  return (
    <div className={container}>
      <Icon icon={icon} className={iconStyle} />
      <div className={column}>
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  );
}

export default IconItem;

const container = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "0.2rem",
  marginTop: "1rem",
});

const column = css({
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
});

const iconStyle = css({
  width: "1.5rem",
  height: "1.5rem",
});
