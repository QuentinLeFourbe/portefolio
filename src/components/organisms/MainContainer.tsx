import { ComponentPropsWithoutRef, forwardRef } from "react";
import { css, cx } from "../../../styled-system/css";

type MainContainerProps = ComponentPropsWithoutRef<"div">;

const MainContainer = forwardRef<HTMLDivElement, MainContainerProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cx(backgroundStyle, props.className)}
      />
    );
  }
);

export default MainContainer;

const backgroundStyle = css({
  margin: "10vh 5vw 10vh 0",
  flexGrow: 1,
  transition: "all 0.2s ease-in-out",
});
