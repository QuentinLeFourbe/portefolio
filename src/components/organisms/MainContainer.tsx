import { ComponentProps } from "react";
import { css } from "../../../styled-system/css";

type MainContainerProps = ComponentProps<"div">;

function MainContainer(props: MainContainerProps) {
  return <div {...props} className={backgroundStyle} />;
}

export default MainContainer;

const backgroundStyle = css({
  margin: "10vh 5vw 10vh 0",
  flexGrow: 1,
});
