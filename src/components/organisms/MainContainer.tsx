import React, { ComponentProps } from "react";
import { css } from "../../../styled-system/css";

type MainContainerProps = ComponentProps<"div">;

function MainContainer(props: MainContainerProps) {
  return <div {...props} className={backgroundStyle} />;
}

export default MainContainer;

const backgroundStyle = css({
  // backgroundColor: "#ffedb116",
  color: "white",
  margin: "10vh 5vw 10vh 0vw",
  flexGrow: 1,
});
