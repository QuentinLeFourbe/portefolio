import React from "react";
import { css } from "../../../styled-system/css";
import Icon from "./Icon";
import { IconName } from "../../types/Icon";

type TitleProps = {
  children?: React.ReactNode;
  icon?: IconName;
};

function Title({ children, icon }: TitleProps) {
  return (
    <div className={titleContainer}>
      {icon && <Icon className={imageStyle} icon={icon} />}
      <h3 className={textStyle}>{children}</h3>
    </div>
  );
}

export default Title;

const titleContainer = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "stretch",
  margin: "1rem 0 1rem 0",
});

const textStyle = css({
  flexGrow: 1,
  background: "titleBackground",
  color: "titleColor",
  padding: "2px  0 2px 1rem ",
});

const imageStyle = css({
  width: "2rem",
  height: "2rem",
  margin: "0 1rem 0 0.5rem",
});
