import { css, cx } from "../../../../styled-system/css";
import { SvgIconName } from "../../../types/Icon";
import SvgIcon from "./SvgIcon";

type TextCardProps = {
  title: string;
  className?: string;
  children: string;
  icon?: SvgIconName;
};

function TextCard({ title, className, children, icon }: TextCardProps) {
  return (
    <div className={cx(container, className)}>
      <div className={titleContainer}>
        {icon && <SvgIcon icon={icon} />}
        <h2>{title}</h2>
      </div>
      <div className={css({ display: "flex", alignItems: "center" })}>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default TextCard;

const container = css({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  padding: { base: "1rem", lg: "2rem" },
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "contact.borders.primary",

  width: "300px",
  height: { base: "250px", lg: "300px" },

  "& svg": {
    width: "50px",
    height: "50px",
    color: "text.secondary",
  },
  "& p": {
    color: "text.primary",
    fontSize: "1.2rem",
    lineHeight: "2rem",
  },

  "&:before": {
    content: "''",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "background.primary",
    zIndex: -1,
    opacity: 0.7,
  },
});

const titleContainer = css({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  width: "100%",
  height: "4.5rem",

  "& h2": {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "text.subtitle",
  },
});
