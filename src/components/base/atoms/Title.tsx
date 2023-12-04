import { css } from "../../../../styled-system/css";

type TitleProps = {
  children: string;
};

function Title({ children }: TitleProps) {
  return <h1 className={titleStyle}>{children}</h1>;
}

export default Title;

const titleStyle = css({
  fontSize: { base: "4rem", lg: "6rem" },
  fontFamily: "title",
  lineHeight: "6.5rem",
  color: "text.title",
});
