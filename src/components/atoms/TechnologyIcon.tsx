import { useState } from "react";
import { Technology } from "../../types/project";
import ExpressIcon from "../../assets/icons/express.svg?react";
import NodeJsIcon from "../../assets/icons/nodejs.svg?react";
import ReactIcon from "../../assets/icons/reactjs.svg?react";
import ReduxIcon from "../../assets/icons/redux.svg?react";
import TypeScriptIcon from "../../assets/icons/typescript.svg?react";
import PandacssIcon from "../../assets/icons/pandacss.svg?react";
import ViteIcon from "../../assets/icons/vite.svg?react";
import WebpackIcon from "../../assets/icons/webpack.svg?react";
import JavascriptIcon from "../../assets/icons/javascript.svg?react";
import MongodbIcon from "../../assets/icons/mongodb.svg?react";
import { css } from "../../../styled-system/css";

type TechnologyIconProps = {
  technology: Technology;
};

function TechnologyIcon({ technology }: TechnologyIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  let renderIcon;
  switch (technology) {
    case "Express.js":
      renderIcon = <ExpressIcon />;
      break;
    case "Node.js":
      renderIcon = <NodeJsIcon />;
      break;
    case "React":
      renderIcon = <ReactIcon />;
      break;
    case "Redux":
      renderIcon = <ReduxIcon />;
      break;
    case "TypeScript":
      renderIcon = <TypeScriptIcon />;
      break;
    case "Panda-CSS":
      renderIcon = <PandacssIcon />;
      break;
    case "Vite.js":
      renderIcon = <ViteIcon />;
      break;
    case "Webpack":
      renderIcon = <WebpackIcon />;
      break;
    case "JavaScript":
      renderIcon = <JavascriptIcon />;
      break;
    case "MongoDB":
      renderIcon = <MongodbIcon />;
      break;
    default:
      break;
  }

  return (
    <div
      className={iconContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && renderIcon}
      {isHovered && technology}
    </div>
  );
}

export default TechnologyIcon;

const iconContainer = css({
  width: "75px",
  height: "75px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& > svg": {
    width: "100%",
    height: "100%",
    margin: "0.5rem",
  },
});
