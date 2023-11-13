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
  padding: "10vh 0 10vh 200px",
  width: "90vw",
  transition: "all 0.2s ease-in-out",
});
